import heroBg from "@/assets/hero-bg.jpg";
import { ChevronRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Máquinas pesadas em canteiro de obras"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[hsl(var(--hero-overlay))]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--hero-overlay))]/90 via-[hsl(var(--hero-overlay))]/60 to-transparent" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-2xl space-y-8">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest rounded-sm">
              Desde 1988
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-surface-dark-foreground animate-fade-up delay-100 text-balance">
            Cursos, manutenção e produtos para{" "}
            <span className="text-primary">máquinas pesadas</span>
          </h1>

          <p className="text-lg text-surface-dark-foreground/70 max-w-xl animate-fade-up delay-200 text-pretty leading-relaxed">
            A TREMA oferece treinamento técnico, manutenção especializada e venda de kits e ferramentas para máquinas pesadas e equipamentos móveis.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <Link
              to="/cursos"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide rounded-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
            >
              Ver Cursos <ChevronRight size={16} />
            </Link>
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-surface-dark-foreground/30 text-surface-dark-foreground font-semibold text-sm uppercase tracking-wide rounded-sm hover:border-primary hover:text-primary active:scale-[0.97] transition-all duration-200"
            >
              Ver Produtos
            </Link>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[hsl(142,70%,40%)] text-surface-dark-foreground font-semibold text-sm uppercase tracking-wide rounded-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
