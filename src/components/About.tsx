import sedImg from "@/assets/sede.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, Clock, Users, Wrench } from "lucide-react";

const stats = [
  { icon: Clock, value: "37+", label: "Anos de experiência" },
  { icon: Users, value: "5.000+", label: "Profissionais capacitados" },
  { icon: Wrench, value: "300+", label: "Empresas atendidas" },
  { icon: Award, value: "100%", label: "Compromisso com qualidade" },
];

const About = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="sobre" className="py-28 lg:py-36 bg-background relative overflow-hidden" ref={ref}>
      {/* decorative */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container-wide relative">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          {/* Image + Stats */}
          <div className={`lg:col-span-6 space-y-6 ${visible ? "animate-slide-left" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
              <img
                src={sedImg}
                alt="Sede da TREMA"
                className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-[1500ms]"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[10px] uppercase tracking-[0.28em] text-primary">Sede TREMA</p>
                <p className="font-display text-2xl mt-1">Contagem · MG</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`lg:col-span-6 space-y-8 ${visible ? "animate-slide-right" : "opacity-0"}`}>
            <span className="eyebrow">Sobre a empresa</span>
            <h2 className="heading-lg text-balance">
              Referência em treinamento técnico e manutenção desde 1988
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-pretty text-[15px]">
              <p>
                A TREMA – Treinamento e Manutenção em Equipamentos Móveis nasceu em 1988 com a missão de capacitar profissionais e oferecer soluções técnicas de alto nível para o setor de máquinas pesadas.
              </p>
              <p>
                Com mais de três décadas de atuação, nos tornamos referência em formação profissional, diagnóstico de falhas e fornecimento de peças e ferramentas especializadas. Nosso compromisso é entregar excelência, aliando experiência de campo à tecnologia mais recente do mercado.
              </p>
              <p>
                Atendemos empresas de construção civil, mineração, agronegócio e transporte em todo o Brasil, sempre com foco em resultados práticos e melhoria contínua.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group bg-card border border-border p-6 rounded-xl space-y-3 hover:border-primary/60 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300"
                >
                  <stat.icon className="text-primary" size={22} />
                  <p className="font-display text-3xl leading-none">{stat.value}</p>
                  <p className="text-[11px] text-muted-foreground uppercase tracking-[0.18em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
