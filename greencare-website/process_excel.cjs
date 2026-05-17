const fs = require('fs');

let raw = fs.readFileSync('full_excel.json', 'utf16le');
if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
const data = JSON.parse(raw);
const items = data.slice(5).filter(item => item['__EMPTY'] && item['__EMPTY'] !== 'NAME OF ITEMS');

const categories = {
  "Aluminium & Cling Films": { matchers: ["FOIL", "COVER", "FILM", "SILVER SHEET", "SILVER COVER"], items: [] },
  "Bags & Carry Bags": { matchers: ["BAG", "DUSTBIN COVER", "HM COVER", "LD COVER"], items: [] },
  "Paper Products": { matchers: ["PAPER", "TOILET ROLL", "M FOLD", "BILL ROLL", "NAPKIN"], items: [] },
  "Gloves & Protection": { matchers: ["GLOVES"], items: [] },
  "Containers": { matchers: ["CONTAINER", "SHAWARMA BOX", "CRATE", "MEAL"], items: [] },
  "Cutlery": { matchers: ["SPOON", "FORK", "STIRER", "TOOTH PICK"], items: [] },
  "Cleaning Chemicals": { matchers: ["WASH", "CLEANER", "SANITIZER", "CHLORINE", "PHYNLE", "SODA", "ODONIL", "FRESHNER"], items: [] },
  "Cleaning Tools": { matchers: ["MOPE", "WIPER", "BRUSH", "DUST PAN", "BUCKET", "BROOMS", "SPONGE", "DUSTBIN", "MUG", "MAT", "LAUNDRY", "SCOTCH BRITE", "STEEL WOOL"], items: [] },
  "Tapes & Misc": { matchers: ["TAPE", "RUBER BAND", "GEL FUEL", "KNIFE", "SLIPPER"], items: [] }
};

const categorizedProducts = {};
Object.keys(categories).forEach(cat => categorizedProducts[cat] = []);

items.forEach(item => {
  const name = item['__EMPTY'];
  const nameUpper = name.toUpperCase();
  const uom = item['__EMPTY_1'] || "";
  const price = item['__EMPTY_2'] || "";

  let assigned = false;
  
  // Specific exceptions
  if (nameUpper === "SILVER COVER ") {
     categorizedProducts["Aluminium & Cling Films"].push({ name, uom, price });
     assigned = true;
  } else if (nameUpper.includes("DUSTBIN COVER") || nameUpper.includes("HM COVER") || nameUpper.includes("LD COVER")) {
     categorizedProducts["Bags & Carry Bags"].push({ name, uom, price });
     assigned = true;
  } else {
    for (const [catName, catData] of Object.entries(categories)) {
      if (catData.matchers.some(m => nameUpper.includes(m))) {
        categorizedProducts[catName].push({ name, uom, price });
        assigned = true;
        break;
      }
    }
  }

  if (!assigned) {
    categorizedProducts["Tapes & Misc"].push({ name, uom, price });
  }
});

// Image mapping based on existing artifacts and logic
const categoryImages = {
  "Aluminium & Cling Films": "/images/kitchen_foil.png",
  "Bags & Carry Bags": "/images/paper_bags.png",
  "Paper Products": "/images/paper_straws.png",
  "Gloves & Protection": "/images/hygiene_products.png",
  "Containers": "/images/food_containers.png",
  "Cutlery": "/images/juice_glasses.png",
  "Cleaning Chemicals": "/images/buckets_storage.png",
  "Cleaning Tools": "/images/buckets_storage.png",
  "Tapes & Misc": "/images/custom_branding.png"
};

const finalData = Object.keys(categorizedProducts).map(catName => ({
  category: catName,
  image: categoryImages[catName] || "/images/placeholder.png",
  products: categorizedProducts[catName].map(p => ({
    name: p.name.trim(),
    uom: String(p.uom).trim(),
    price: p.price
  }))
})).filter(c => c.products.length > 0);

const fileContent = `// Automatically generated from full_excel.json\nexport const productCategories = ${JSON.stringify(finalData, null, 2)};\n`;

fs.writeFileSync('src/data/productData.js', fileContent);
console.log('Successfully wrote src/data/productData.js');
