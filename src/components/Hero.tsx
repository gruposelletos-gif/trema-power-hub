import heroBg from "@/assets/hero-bg.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";
import { ArrowRight, MessageCircle, MoveDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={heroBgMobile} />
          <img
            src={heroBg}
            alt="Máquinas pesadas em canteiro de obras"
            className="w-full h-full object-cover scale-105"
            loading="eager"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      </div>

      <div className="container-wide relative z-10 pb-24 pt-40 sm:pb-32">
        <div className="max-w-4xl space-y-10">
          <div className="animate-fade-up flex items-center gap-4">
            <span className="h-px w-14 bg-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
              Desde 1988 · Manutenção industrial
            </span>
          </div>

          <h1 className="heading-xl text-white animate-fade-up delay-100 text-balance">
            Cursos, manutenção e produtos para{" "}
            <span className="text-primary italic font-light [font-family:'Barlow'] normal-case tracking-normal">
              máquinas pesadas
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/70 max-w-2xl animate-fade-up delay-200 text-pretty leading-relaxed font-light">
            A TREMA oferece treinamento técnico, manutenção especializada e venda de kits e ferramentas para máquinas pesadas e equipamentos móveis.
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-up delay-300">
            <Link
              to="/cursos"
              className="inline-flex items-center gap-3 pl-7 pr-3 py-3 bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-[0.2em] rounded-full hover:brightness-105 hover:shadow-yellow active:scale-[0.97] transition-all duration-300 group"
            >
              Ver Cursos
              <span className="w-9 h-9 rounded-full bg-primary-foreground text-primary flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight size={14} />
              </span>
            </Link>
            <Link
              to="/produtos"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/25 text-white font-semibold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white hover:text-black active:scale-[0.97] transition-all duration-300"
            >
              Ver Produtos
            </Link>
            <a
              href="https://wa.me/5531993091735"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 border border-white/25 text-white font-semibold text-xs uppercase tracking-[0.2em] rounded-full hover:bg-[hsl(142,70%,40%)] hover:border-transparent active:scale-[0.97] transition-all duration-300"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </div>
        </div>

        {/* Meta strip */}
        <div className="hidden lg:flex mt-24 items-end justify-between gap-10 border-t border-white/15 pt-8 animate-fade-up delay-500">
          <div className="flex items-center gap-2 text-white/60 text-xs uppercase tracking-[0.25em]">
            <MoveDown size={14} className="animate-bounce" /> Explore
          </div>
          <div className="grid grid-cols-3 gap-10 max-w-2xl">
            {[
              { k: "37+", v: "Anos de mercado" },
              { k: "5.000+", v: "Profissionais capacitados" },
              { k: "300+", v: "Empresas atendidas" },
            ].map((s) => (
              <div key={s.v} className="space-y-1">
                <p className="font-display text-3xl text-white">{s.k}</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/50">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
