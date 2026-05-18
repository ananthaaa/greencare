import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/919072112316"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} />
  </a>
);

export default WhatsAppFloat;
