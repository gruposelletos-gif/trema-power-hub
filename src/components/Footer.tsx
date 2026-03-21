import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-surface-dark text-surface-dark-foreground border-t border-primary/20">
    <div className="container py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <span className="font-display text-2xl font-bold text-primary tracking-wider">TREMA</span>
          <p className="text-sm text-surface-dark-foreground/60 leading-relaxed">
            Treinamento e Manutenção em Equipamentos Móveis. Desde 1988 formando profissionais de excelência.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="font-display font-semibold uppercase tracking-wide text-sm">Navegação</h4>
          <ul className="space-y-2">
            {["Home", "Sobre", "Serviços", "Produtos", "Cursos", "Contato"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="text-sm text-surface-dark-foreground/60 hover:text-primary transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h4 className="font-display font-semibold uppercase tracking-wide text-sm">Serviços</h4>
          <ul className="space-y-2 text-sm text-surface-dark-foreground/60">
            <li>Treinamentos Técnicos</li>
            <li>Diagnóstico de Falhas</li>
            <li>Suporte Especializado</li>
            <li>Venda de Peças e Kits</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="font-display font-semibold uppercase tracking-wide text-sm">Contato</h4>
          <ul className="space-y-3 text-sm text-surface-dark-foreground/60">
            <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> (11) 4555-1234</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> contato@trema.com.br</li>
            <li className="flex items-start gap-2"><MapPin size={14} className="text-primary mt-0.5" /> Rua Industrial, 450 – SP</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-surface-dark-foreground/10 py-6">
      <div className="container text-center text-xs text-surface-dark-foreground/40">
        © {new Date().getFullYear()} TREMA – Treinamento e Manutenção em Equipamentos Móveis. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
