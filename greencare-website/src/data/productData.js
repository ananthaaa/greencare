// Greencare Product Catalog — 3-Tier Structure
// Main Category → Sub-Category → Products
// Prices updated from GREEN_CARE_online.xlsx
// All existing image paths preserved.

export const productCatalog = [
  {
    mainCategory: 'Packing Materials',
    icon: '📦',
    image: '/images/food_containers.png',
    subCategories: [
      {
        name: 'Foils & Films',
        image: '/images/aluminiumfoil72mtr.png',
        products: [
          { name: 'Aluminium Foil 72 Mtr', uom: 'NOS', price: 325, image: '/images/aluminiumfoil72mtr.png' },
          { name: 'Aluminium Foil 1 Kg', uom: 'NOS', price: 435, image: '/images/aluminiumfoil1kg.png' },
          { name: 'Silver Pouch', uom: 'KG', price: 185, image: '/images/silvercover.png' },
          { name: 'Cling Film 100 Mtr', uom: 'NOS', price: 135, image: '/images/clingfilm300mtr.png' },
          { name: 'Cling Film 300 Mtr', uom: 'NOS', price: 310, image: '/images/clingfilm300mtr.png' },
          { name: 'Cling Film 600 Mtr', uom: 'NOS', price: 490, image: '/images/clingfilm600mtr.png' },
          { name: 'Silver Sheet (Meals Parcel)', uom: 'PKT', price: 75, image: '/images/silversheet(mealsparcel).png' },
        ],
      },
      {
        name: 'Bags & Covers',
        image: '/images/garbagebagplastic.png',
        products: [
          { name: 'Garbage Bag Plastic', uom: 'KG', price: 135, image: '/images/garbagebagplastic.png' },
          { name: 'Oxo Degradable Garbage Bag', uom: 'KG', price: 160, image: '/images/oxodegradable.png' },
          { name: 'Bio Degradable Garbage Bag', uom: 'KG', price: 180, image: '/images/biodegradable.png' },
          { name: 'Dustbin Cover', uom: 'PKT', price: 135, image: '/images/dustbincover.png' },
          { name: 'Bio Carry Bags', uom: 'KG', price: 180, image: '/images/biocarrybag.png' },
          { name: 'Carry Bag Plastic', uom: 'KG', price: 145, image: '/images/plasticcarrybag.png' },
          { name: 'HM Cover', uom: 'KG', price: 155, image: '/images/hmcover.png' },
          { name: 'LD Cover', uom: 'KG', price: 200, image: '/images/ldcover.png' },
          { name: 'SOS Paper Cover Square Bottom (S/M/L)', uom: 'KG', price: 120, image: '/images/sospapercoversquarebottom.jpg' },
          { name: 'Paper Cover V Bottom', uom: 'KG', price: 95, image: '/images/papercovervbottom.png' },
          { name: 'Paper Bag (11×11×6)', uom: 'NOS', price: 9.5, image: '/images/paperbag11x11x6.png' },
        ],
      },
      {
        name: 'Aluminium Containers',
        image: '/images/ALUMINIUMCONTAINER250ML.png',
        products: [
          { name: 'Aluminium Container 250 Ml', uom: 'PAC', price: 195, image: '/images/ALUMINIUMCONTAINER250ML.png' },
          { name: 'Aluminium Container 450 Ml', uom: 'PAC', price: 295, image: '/images/Aluminiumcontainer450.png' },
          { name: 'Aluminium Container 750 Ml', uom: 'PAC', price: 345, image: '/images/AluminiumContainer750.png' },
        ],
      },
      {
        name: 'Plastic Containers',
        image: '/images/PLASTICCONTAINER500ML.png',
        products: [
          { name: 'Plastic Container 25 Ml', uom: 'NOS', price: 0.89, image: '/images/PLASTICCONTAINER25ML.png' },
          { name: 'Plastic Container 50 Ml', uom: 'NOS', price: 1.35, image: '/images/PLASTICCONTAINER50ML.png' },
          { name: 'Plastic Container 100 Ml', uom: 'NOS', price: 2.15, image: '/images/PLASTICCONTAINER100ML.png' },
          { name: 'Plastic Container 250 Ml', uom: 'NOS', price: 3.39, image: '/images/PLASTICCONTAINER250ML.png' },
          { name: 'Plastic Container 300 Ml Square', uom: 'NOS', price: 4.2, image: '/images/PLASTICCONTAINER300MLSQURE.png' },
          { name: 'Plastic Container 500 Ml Round', uom: 'NOS', price: 4.56, image: '/images/PLASTICCONTAINER500ML.png' },
          { name: 'Plastic Container 500 Ml Square', uom: 'NOS', price: 7.7, image: '/images/PLASTICCONTAINER500MLSQURE.png' },
          { name: 'Plastic Container 500 Gm / 450 Ml Round', uom: 'NOS', price: 3.95, image: '/images/PLASTICCONTAINER500ML.png' },
          { name: 'Plastic Container 750 Ml Round', uom: 'NOS', price: 6.4, image: '/images/PLASTICCONTAINER750MLSQURE.png' },
          { name: 'Plastic Container 750 Ml Square', uom: 'NOS', price: 8, image: '/images/PLASTICCONTAINER750MLSQURE.png' },
          { name: 'Plastic Container 1000 Ml Round', uom: 'NOS', price: 6.9, image: '/images/PLASTICCONTAINER1000ML.png' },
          { name: 'Plastic Container 1000 Ml Square', uom: 'NOS', price: 8.54, image: '/images/PLASTICCONTAINER1000ML.png' },
          { name: 'Plastic Container 2500 Ml', uom: 'NOS', price: 18.9, image: '/images/PLASTICCONTAINER2500ML.png' },
        ],
      },
      {
        name: 'Cups, Plates & Trays',
        image: '/images/papercup.png',
        products: [
          { name: 'Bio Paper Cup 150 Ml', uom: 'PKT', price: 58, image: '/images/papercup.png' },
          { name: 'Bio Paper Cup 210 Ml', uom: 'PKT', price: 68, image: '/images/papercup.png' },
          { name: 'Ripple Cup 150 Ml', uom: 'NOS', price: 1.9, image: '/images/papercup.png' },
          { name: 'Ripple Cup 210 Ml', uom: 'NOS', price: 2.2, image: '/images/papercup.png' },
          { name: 'Bio Paper Plate Small', uom: 'NOS', price: 1.95, image: '/images/paperplatesmall.png' },
          { name: 'Paper Plate Big', uom: 'PKT', price: 165, image: '/images/paperplatebig.png' },
          { name: 'Dine Earth Paper Plate 6 Inch', uom: 'NOS', price: 1.99, image: '/images/paperplatesmall.png' },
          { name: 'BL Plastic Glass 300 Ml', uom: 'NOS', price: 5.8, image: '/images/papercup.png' },
          { name: 'BL Plastic Glass 350 Ml', uom: 'NOS', price: 6, image: '/images/papercup.png' },
          { name: '3 Compartment Parcel Tray', uom: 'NOS', price: 12, image: '/images/3compartmentparceltray.jpg' },
          { name: '5 Compartment Parcel Tray', uom: 'NOS', price: 13, image: '/images/5compartmentparceltray.jpg' },
          { name: '8 Compartment Parcel Tray', uom: 'NOS', price: 17, image: '/images/8compartmentparceltray.jpg' },
        ],
      },
      {
        name: 'Cutlery & Straws',
        image: '/images/paperstraw8mm.png',
        products: [
          { name: 'Paper Straw 6 Mm', uom: 'PKT', price: 30, image: '/images/paperstraw6mm.png' },
          { name: 'Paper Straw 8 Mm', uom: 'PKT', price: 33, image: '/images/paperstraw8mm.png' },
          { name: 'Wrapped Straw 8 Mm', uom: 'PKT', price: 100, image: '/images/paperstraw8mm.png' },
          { name: 'Wooden Spoon 140 Mm', uom: 'PKT', price: 70, image: '/images/WOODENSPOON110MM.png' },
          { name: 'Wooden Spoon 160 Mm', uom: 'PKT', price: 75, image: '/images/WOODENSPOON160MM.png' },
          { name: 'Wooden Stirrer 140 Mm', uom: 'PKT', price: 70, image: '/images/WOODENSTIRER160MM.png' },
          { name: 'Wooden Fork 160 Mm', uom: 'PKT', price: 75, image: '/images/WOODENFORK160MM.png' },
          { name: 'Tooth Pick', uom: 'PKT', price: 135, image: '/images/TOOTHPICK.png' },
          { name: 'Paper Napkin', uom: 'PKT', price: 35, image: '/images/papernapkin2.png' },
        ],
      },
      {
        name: 'Tapes & Accessories',
        image: '/images/browntape.png',
        products: [
          { name: 'Cello Tape', uom: 'NOS', price: 17.5, image: '/images/cellotape.png' },
          { name: 'Masking Tape', uom: 'NOS', price: 125, image: '/images/maskingtape.png' },
          { name: 'Brown Tape', uom: 'NOS', price: 115, image: '/images/browntape.png' },
          { name: 'Rubber Band', uom: 'KG', price: 390, image: '/images/rubberband.jpg' },
          { name: 'Pin 25 Mm', uom: 'PKT', price: 40, image: '/images/pin25mm.jpg' },
          { name: 'Poly Guard Knife', uom: 'NOS', price: 110, image: '/images/polyguardknife.png' },
        ],
      },
      {
        name: 'Gloves & Safety',
        image: '/images/nitralgloves.png',
        products: [
          { name: 'Nitral Gloves', uom: 'PKT', price: 325, image: '/images/nitralgloves.png' },
          { name: 'Plastic Gloves', uom: 'PKT', price: 35, image: '/images/plasticglove.png' },
          { name: 'Rubber Gloves', uom: 'PKT', price: 90, image: '/images/rubberglove.png' },
        ],
      },
      {
        name: 'Fuel',
        image: '/images/gelfuel200gm.jpg',
        products: [
          { name: 'Gel Fuel 200 Gm', uom: 'NOS', price: 21.5, image: '/images/gelfuel200gm.jpg' },
        ],
      },
      {
        name: 'Scouring',
        image: '/images/scotchbrite.jpg',
        products: [
          { name: 'Scotch Brite', uom: 'NOS', price: 19, image: '/images/scotchbrite.jpg' },
          { name: 'Steel Wool', uom: 'NOS', price: 27, image: '/images/steelwool.jpg' },
        ],
      },
    ],
  },

  {
    mainCategory: 'Cleaning Materials',
    icon: '🧴',
    image: '/images/cleaning_chemicals.png',
    subCategories: [
      {
        name: 'Liquid Cleaners',
        image: '/images/dishwash5ltr.png',
        products: [
          { name: 'Dish Wash 5 Ltr', uom: 'NOS', price: 290, image: '/images/dishwash5ltr.png' },
          { name: 'Hand Wash 5 Ltr', uom: 'NOS', price: 390, image: '/images/handwash5ltr.png' },
          { name: 'Toilet Cleaner 5 Ltr', uom: 'NOS', price: 485, image: '/images/toiletcleaner5ltr.png' },
          { name: 'Glass Cleaner 5 Ltr', uom: 'NOS', price: 445, image: '/images/glasscleaner5ltr.png' },
          { name: 'Floor Cleaner 5 Ltr', uom: 'NOS', price: 350, image: '/images/floorcleaner5ltr.png' },
          { name: 'Multi Cleaner 5 Ltr', uom: 'NOS', price: 649, image: '/images/multicleaner5ltr.png' },
          { name: 'Air Freshener 5 Ltr', uom: 'NOS', price: 1025, image: '/images/airfreshener5ltr.png' },
          { name: 'Sanitizer 5 Ltr', uom: 'NOS', price: 895, image: '/images/sanitizer5ltr.png' },
          { name: 'Chlorine 5 Ltr', uom: 'NOS', price: 230, image: '/images/chlorine5ltr.png' },
          { name: 'Phynle 5 Ltr', uom: 'NOS', price: 289, image: '/images/phynle5ltr.png' },
        ],
      },
      {
        name: 'Chemicals',
        image: '/images/causticsoda.png',
        products: [
          { name: 'Caustic Soda', uom: 'KG', price: 110, image: '/images/causticsoda.png' },
        ],
      },
      {
        name: 'Air Care',
        image: '/images/odonil.png',
        products: [
          { name: 'Odonil', uom: 'NOS', price: 65, image: '/images/odonil.png' },
        ],
      },
    ],
  },

  {
    mainCategory: 'Housekeeping Materials',
    icon: '🧹',
    image: '/images/cleaning_tools.png',
    subCategories: [
      {
        name: 'Paper & Tissue',
        image: '/images/mfoldnapkin.png',
        products: [
          { name: 'M Fold Napkin', uom: 'NOS', price: 48, image: '/images/mfoldnapkin.png' },
          { name: 'Toilet Roll', uom: 'NOS', price: 18, image: '/images/toiletroll.png' },
          { name: 'Bill Roll (KOT)', uom: 'NOS', price: 37, image: '/images/billroll.png' },
          { name: 'Jumbo Kitchen Paper Roll', uom: 'KG', price: 290, image: '/images/paperroll.png' },
        ],
      },
      {
        name: 'Mopping & Wiping',
        image: '/images/mop.jpg',
        products: [
          { name: 'Dry Mop', uom: 'NOS', price: 489, image: '/images/mop.jpg' },
          { name: 'Wiper (Black)', uom: 'NOS', price: 260, image: '/images/wiperblack.jpg' },
          { name: 'Table Cleaning Wiper', uom: 'NOS', price: 99, image: '/images/tablecleaningwiper.jpg' },
          { name: 'Table Cleaning Sponge (Cellulose)', uom: 'PKT', price: 155, image: '/images/tablecleaningsponge.jpg' },
          { name: 'Wiper Multi-Color', uom: 'NOS', price: 210, image: '/images/wipermulticolor.jpg' },
        ],
      },
      {
        name: 'Brushes',
        image: '/images/broom.png',
        products: [
          { name: 'Floor Scrubbing Brush', uom: 'NOS', price: 325, image: '/images/scrubbingbrush.jpg' },
          { name: 'Toilet Brush', uom: 'NOS', price: 120, image: '/images/toiletbrush.jpg' },
          { name: 'Bottle Cleaning Brush', uom: 'NOS', price: 65, image: '/images/bottlecleaningbrush.png' },
          { name: 'Plastic Broom', uom: 'NOS', price: 280, image: '/images/plasticbroom.jpg' },
          { name: 'Broom', uom: 'NOS', price: 270, image: '/images/broom.png' },
          { name: 'Coconut Broom', uom: 'NOS', price: 40, image: '/images/coconutbroom.jpg' },
        ],
      },
      {
        name: 'Dustpans & Bins',
        image: '/images/dustbin.png',
        products: [
          { name: 'Dust Pan', uom: 'NOS', price: 85, image: '/images/dustpan.jpg' },
          { name: 'Dust Pan with Handle', uom: 'NOS', price: 160, image: '/images/dustpanwithhandle.jpg' },
          { name: 'Lobby Dust Pan', uom: 'NOS', price: 950, image: '/images/lobbydustpan.jpg' },
          { name: 'Dustbin', uom: 'NOS', price: 560, image: '/images/dustbin.png' },
        ],
      },
      {
        name: 'Buckets & Storage',
        image: '/images/bucket40ltr.jpg',
        products: [
          { name: 'Bucket 40 Ltr', uom: 'NOS', price: 789, image: '/images/bucket40ltr.jpg' },
          { name: 'Blue Crate', uom: 'NOS', price: 315, image: '/images/BLUE CRATE.jpg' },
          { name: 'Mug', uom: 'NOS', price: 55, image: '/images/mug.jpg' },
        ],
      },
      {
        name: 'Miscellaneous',
        image: '/images/mat.jpg',
        products: [
          { name: 'Mat', uom: 'NOS', price: 195, image: '/images/mat.jpg' },
          { name: 'Laundry Bag', uom: 'NOS', price: 11.5, image: '/images/laundrybag.jpg' },
          { name: 'Cotton Fabric Slipper', uom: 'NOS', price: 44, image: '/images/mat.jpg' },
        ],
      },
    ],
  },
];

// Helper: flat list of all products with mainCategory + subCategory tags attached
export const allProductsFlat = productCatalog.flatMap(main =>
  main.subCategories.flatMap(sub =>
    sub.products.map(p => ({
      ...p,
      mainCategory: main.mainCategory,
      subCategory: sub.name,
      fallbackImage: sub.image || main.image,
    }))
  )
);
