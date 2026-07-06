import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Instagram, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

const PHONE = "(31) 3334-4311";
const WHATSAPP = "(31) 9 9309-1735";
const WHATSAPP_LINK = "https://wa.me/5531993091735";
const EMAIL = "trema@treamt.com.br";
const INSTAGRAM = "@trema.treinamento.manutencao";
const INSTAGRAM_LINK = "https://instagram.com/trema.treinamento.manutencao";
const ADDRESS = "Rua Emília Silva Freitas, 360, Novo Eldorado, Contagem/MG, CEP: 32.341-500";
const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Rua+Em%C3%ADlia+Silva+Freitas+360+Novo+Eldorado+Contagem+MG";

const infoItems = [
  { icon: Phone, label: "Telefone", value: PHONE, href: "tel:+553133344311" },
  { icon: MessageCircle, label: "WhatsApp", value: WHATSAPP, href: `${WHATSAPP_LINK}?text=Olá! Gostaria de mais informações.`, external: true },
  { icon: Mail, label: "E-mail", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Instagram, label: "Instagram", value: INSTAGRAM, href: INSTAGRAM_LINK, external: true },
  { icon: MapPin, label: "Endereço", value: ADDRESS, href: MAPS_LINK, external: true },
];

const Contact = () => {
  const { ref, visible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contato" className="py-28 lg:py-36 bg-background" ref={ref}>
      <div className="container-wide">
        <div className={`grid lg:grid-cols-12 gap-10 mb-16 items-end ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="lg:col-span-7 space-y-6">
            <span className="eyebrow">Contato</span>
            <h2 className="heading-lg text-balance">Fale com a nossa equipe</h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-border">
            <p className="text-muted-foreground leading-relaxed">
              Entre em contato para solicitar orçamentos, tirar dúvidas sobre cursos ou agendar uma visita técnica. Nossa equipe está pronta para atendê-lo.
            </p>
          </div>
        </div>

        <div className={`grid lg:grid-cols-12 gap-10 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          {/* Contact info */}
          <div className="lg:col-span-5 space-y-3">
            {infoItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-5 p-6 bg-card border border-border rounded-2xl hover:border-foreground hover:shadow-soft transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-foreground/[0.04] group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center flex-shrink-0 transition-colors">
                  <item.icon size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">{item.label}</p>
                  <p className="text-sm mt-1 text-foreground group-hover:text-primary transition-colors break-words">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 bg-card border border-border rounded-2xl p-8 lg:p-10 space-y-5 shadow-soft">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Nome</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-foreground focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Empresa</label>
                <input
                  type="text"
                  maxLength={100}
                  className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-foreground focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="Nome da empresa"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">E-mail</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-foreground focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Telefone</label>
                <input
                  type="tel"
                  maxLength={20}
                  className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-foreground focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="(31) 99999-9999"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Assunto</label>
              <select className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-foreground focus:ring-2 focus:ring-primary/30 transition-all">
                <option>Solicitar orçamento</option>
                <option>Informações sobre cursos</option>
                <option>Suporte técnico</option>
                <option>Outros</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">Mensagem</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                className="w-full px-4 py-3.5 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-foreground focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                placeholder="Como podemos ajudar?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-3 pl-7 pr-3 py-3 bg-foreground text-background font-semibold text-xs uppercase tracking-[0.22em] rounded-full hover:bg-primary hover:text-primary-foreground active:scale-[0.97] transition-all duration-300 group"
            >
              Enviar mensagem
              <span className="w-9 h-9 rounded-full bg-background/10 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Send size={14} />
              </span>
            </button>
            {submitted && (
              <p className="text-sm text-[hsl(142,70%,40%)] font-medium animate-fade-in">
                ✓ Mensagem enviada com sucesso! Entraremos em contato em breve.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
