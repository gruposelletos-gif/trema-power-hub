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

const Services = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="servicos" className="py-24 bg-surface-dark text-surface-dark-foreground" ref={ref}>
      <div className="container">
        <div className={`text-center max-w-2xl mx-auto mb-16 space-y-4 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Soluções completas para o setor de máquinas pesadas
          </h2>
        </div>

        {/* Trainings */}
        <div className={`mb-16 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary" size={24} />
            <h3 className="text-xl font-display font-bold uppercase tracking-wide">Treinamentos</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainings.map((item) => (
              <div
                key={item.title}
                className="bg-surface-dark-foreground/5 border border-surface-dark-foreground/10 p-6 rounded-sm space-y-3 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <item.icon className="text-primary" size={28} />
                <h4 className="font-display font-semibold text-lg">{item.title}</h4>
                <p className="text-sm text-surface-dark-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance */}
        <div className={visible ? "animate-fade-up delay-400" : "opacity-0"}>
          <div className="flex items-center gap-3 mb-8">
            <Cog className="text-primary" size={24} />
            <h3 className="text-xl font-display font-bold uppercase tracking-wide">Manutenção Técnica</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {maintenance.map((item) => (
              <div
                key={item.title}
                className="bg-surface-dark-foreground/5 border border-surface-dark-foreground/10 p-6 rounded-sm space-y-3 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <item.icon className="text-primary" size={28} />
                <h4 className="font-display font-semibold text-lg">{item.title}</h4>
                <p className="text-sm text-surface-dark-foreground/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
