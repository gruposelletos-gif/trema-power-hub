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
    <section id="sobre" className="py-24 bg-background" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className={`space-y-6 ${visible ? "animate-slide-left" : "opacity-0"}`}>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Sobre a empresa
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-balance">
              Referência em treinamento técnico e manutenção desde 1988
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-pretty">
              <p>
                A TREMAT – Treinamento e Manutenção em Equipamentos Móveis nasceu em 1988 com a missão de capacitar profissionais e oferecer soluções técnicas de alto nível para o setor de máquinas pesadas.
              </p>
              <p>
                Com mais de três décadas de atuação, nos tornamos referência em formação profissional, diagnóstico de falhas e fornecimento de peças e ferramentas especializadas. Nosso compromisso é entregar excelência, aliando experiência de campo à tecnologia mais recente do mercado.
              </p>
              <p>
                Atendemos empresas de construção civil, mineração, agronegócio e transporte em todo o Brasil, sempre com foco em resultados práticos e melhoria contínua.
              </p>
            </div>
          </div>

          {/* Image + Stats */}
          <div className={`space-y-8 ${visible ? "animate-slide-right" : "opacity-0"}`}>
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img
                src={sedImg}
                alt="Sede da TREMAT"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card border border-border p-5 rounded-sm text-center space-y-2 hover:border-primary/40 transition-colors duration-200"
                >
                  <stat.icon className="mx-auto text-primary" size={24} />
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</p>
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
