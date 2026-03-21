import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { ref, visible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contato" className="py-24 bg-background" ref={ref}>
      <div className="container">
        <div className={`text-center max-w-2xl mx-auto mb-16 space-y-4 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Contato
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Fale com a nossa equipe
          </h2>
        </div>

        <div className={`grid lg:grid-cols-2 gap-16 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          {/* Contact info */}
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Entre em contato para solicitar orçamentos, tirar dúvidas sobre cursos ou agendar uma visita técnica. Nossa equipe está pronta para atendê-lo.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm">Telefone</p>
                  <p className="text-muted-foreground text-sm">(11) 4555-1234</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <p className="text-muted-foreground text-sm">(11) 99999-9999</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm">E-mail</p>
                  <p className="text-muted-foreground text-sm">contato@trema.com.br</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={18} />
                </div>
                <div>
                  <p className="font-semibold text-sm">Endereço</p>
                  <p className="text-muted-foreground text-sm">Rua Industrial, 450 – São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wide">Nome</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="Seu nome"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wide">Empresa</label>
                <input
                  type="text"
                  maxLength={100}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="Nome da empresa"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wide">E-mail</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wide">Telefone</label>
                <input
                  type="tel"
                  maxLength={20}
                  className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide">Assunto</label>
              <select className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow">
                <option>Solicitar orçamento</option>
                <option>Informações sobre cursos</option>
                <option>Suporte técnico</option>
                <option>Outros</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide">Mensagem</label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                placeholder="Como podemos ajudar?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide rounded-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200 w-full sm:w-auto justify-center"
            >
              <Send size={16} /> Enviar mensagem
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
