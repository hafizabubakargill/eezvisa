import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/447456583652"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
      data-testid="button-whatsapp"
    >
      <SiWhatsapp className="h-7 w-7 text-white" />
    </a>
  );
}
