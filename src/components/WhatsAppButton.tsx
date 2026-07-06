import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5531993091735"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 group"
    aria-label="Falar no WhatsApp"
  >
    <span className="absolute inset-0 rounded-full bg-[hsl(142,70%,40%)] animate-ping opacity-30" />
    <span className="relative w-14 h-14 bg-[hsl(142,70%,40%)] rounded-full flex items-center justify-center shadow-elevated hover:scale-110 active:scale-95 transition-transform duration-300">
      <MessageCircle className="text-white" size={26} />
    </span>
  </a>
);

export default WhatsAppButton;
