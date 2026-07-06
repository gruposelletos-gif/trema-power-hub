import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Cog,
  Cpu,
  Gauge,
  GraduationCap,
  Package,
  Search,
  Snowflake,
  Truck,
} from "lucide-react";

const trainings = [
  { icon: Cog, title: "Manutenção de Equipamentos Móveis", desc: "Formação prática em manutenção preventiva e corretiva de máquinas pesadas." },
  { icon: Cpu, title: "Mecatrônica", desc: "Hidráulica, pneumática, elétrica e eletrônica aplicadas a equipamentos." },
  { icon: Snowflake, title: "Ar Condicionado Veicular", desc: "Diagnóstico e manutenção de sistemas de climatização automotiva." },
  { icon: Truck, title: "Operação de Equipamentos", desc: "Capacitação para operação segura e eficiente de máquinas." },
  { icon: Package, title: "Movimentação e Amarração de Cargas", desc: "Técnicas e normas para transporte seguro de materiais pesados." },
];

const maintenance = [
  { icon: Search, title: "Diagnóstico de Falhas", desc: "Análise técnica avançada para identificação precisa de problemas." },
  { icon: Gauge, title: "Suporte Técnico Especializado", desc: "Assistência técnica contínua com equipe qualificada." },
];

const Card = ({ item, index }: { item: { icon: any; title: string; desc: string }; index: number }) => (
  <div
    className="group relative bg-card border border-border rounded-2xl p-8 space-y-5 hover:border-foreground/80 hover:-translate-y-1 hover:shadow-elevated transition-all duration-500 overflow-hidden"
    style={{ transitionDelay: `${index * 40}ms` }}
  >
    <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative flex items-center justify-between">
      <div className="w-14 h-14 rounded-xl bg-foreground/[0.04] group-hover:bg-primary group-hover:text-primary-foreground flex items-center justify-center transition-colors duration-300">
        <item.icon size={26} />
      </div>
      <span className="font-display text-lg text-foreground/25 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
    </div>
    <h4 className="font-display text-xl uppercase leading-tight relative">{item.title}</h4>
    <p className="text-sm text-muted-foreground leading-relaxed relative">{item.desc}</p>
  </div>
);

const Services = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="servicos" className="py-28 lg:py-36 bg-surface-alt relative" ref={ref}>
      <div className="container-wide">
        <div className={`grid lg:grid-cols-12 gap-10 mb-20 items-end ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="lg:col-span-7 space-y-6">
            <span className="eyebrow">Serviços</span>
            <h2 className="heading-lg text-balance">
              Soluções completas para o setor de máquinas pesadas
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-border">
            <p className="text-muted-foreground leading-relaxed">
              Atuamos com formação técnica, diagnóstico e suporte especializado — cobrindo toda a jornada de manutenção e operação de equipamentos móveis.
            </p>
          </div>
        </div>

        {/* Trainings */}
        <div className={`mb-16 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary" size={22} />
            <h3 className="font-display text-sm uppercase tracking-[0.28em]">Treinamentos</h3>
            <span className="flex-1 h-px bg-border ml-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trainings.map((item, i) => (
              <Card key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Maintenance */}
        <div className={visible ? "animate-fade-up delay-400" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <Cog className="text-primary" size={22} />
            <h3 className="font-display text-sm uppercase tracking-[0.28em]">Manutenção Técnica</h3>
            <span className="flex-1 h-px bg-border ml-4" />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {maintenance.map((item, i) => (
              <Card key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
