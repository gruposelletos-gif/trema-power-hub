import { Instagram, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-surface-dark text-surface-dark-foreground border-t border-primary/20">
    <div className="container py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link to="/" className="font-display text-2xl font-bold text-primary tracking-wider">TREMAT</Link>
          <p className="text-sm text-surface-dark-foreground/60 leading-relaxed">
            Treinamento e Manutenção em Equipamentos Móveis. Desde 1988 formando profissionais de excelência.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="font-display font-semibold uppercase tracking-wide text-sm">Navegação</h4>
          <ul className="space-y-2">
            {[
              { to: "/", label: "Início" },
              { to: "/sobre", label: "Sobre" },
              { to: "/cursos", label: "Cursos" },
              { to: "/produtos", label: "Produtos" },
              { to: "/contato", label: "Contato" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-surface-dark-foreground/60 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-display font-semibold uppercase tracking-wide text-sm">Serviços</h4>
          <ul className="space-y-2 text-sm text-surface-dark-foreground/60">
            <li>Treinamentos Técnicos</li>
            <li>Diagnóstico de Falhas</li>
            <li>Suporte Especializado</li>
            <li>Venda de Peças e Kits</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-display font-semibold uppercase tracking-wide text-sm">Contato</h4>
          <ul className="space-y-3 text-sm text-surface-dark-foreground/60">
            <li>
              <a href="tel:+553133344311" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} className="text-primary" /> (31) 3334-4311
              </a>
            </li>
            <li>
              <a href="https://wa.me/5531993091735" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <MessageCircle size={14} className="text-primary" /> (31) 9 9309-1735
              </a>
            </li>
            <li>
              <a href="mailto:tremat@treamt.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} className="text-primary" /> tremat@treamt.com.br
              </a>
            </li>
            <li>
              <a href="https://instagram.com/tremat.treinamento.manutencao" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Instagram size={14} className="text-primary" /> @tremat.treinamento.manutencao
              </a>
            </li>
            <li>
              <a href="https://www.google.com/maps/search/?api=1&query=Rua+Em%C3%ADlia+Silva+Freitas+360+Novo+Eldorado+Contagem+MG" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-primary transition-colors">
                <MapPin size={14} className="text-primary mt-0.5" /> Rua Emília Silva Freitas, 360 – Contagem/MG
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-surface-dark-foreground/10 py-6">
      <div className="container text-center text-xs text-surface-dark-foreground/40 space-y-1">
        <p>© {new Date().getFullYear()} TREMAT – Treinamento e Manutenção em Equipamentos Móveis. Todos os direitos reservados.</p>
        <p>Criado por{" "}
          <a href="https://selletos.com.br" target="_blank" rel="noopener noreferrer" className="text-surface-dark-foreground/60 hover:text-primary transition-colors underline underline-offset-2">
            selletos.com.br
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
