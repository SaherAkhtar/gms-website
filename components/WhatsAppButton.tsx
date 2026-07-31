"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  // Replace this with your real WhatsApp number later
  const phone = "923008382774";

  const message =
  "Hello Get Migration & Study Team,\n\nI visited your website and would like to inquire about your visa and immigration services. Please contact me at your earliest convenience.\n\nThank you.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50"
    >
      <FaWhatsapp size={36} />
    </a>
  );
}