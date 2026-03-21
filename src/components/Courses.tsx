import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, BookOpen, CheckCircle, TrendingUp } from "lucide-react";

const courses = [
  { title: "Manutenção de Equipamentos Móveis", desc: "Curso completo com foco em manutenção preventiva e corretiva de escavadeiras, pás carregadeiras, retroescavadeiras e outros equipamentos." },
  { title: "Mecatrônica Aplicada", desc: "Formação integrada em hidráulica, pneumática, elétrica e eletrônica para diagnóstico e reparo de sistemas complexos." },
  { title: "Ar Condicionado Veicular", desc: "Capacitação em diagnóstico, manutenção e recarga de sistemas de climatização em veículos e máquinas." },
  { title: "Operação de Equipamentos Pesados", desc: "Treinamento prático para operação segura, produtiva e em conformidade com normas regulamentadoras." },
  { title: "Movimentação e Amarração de Cargas", desc: "Normas, técnicas e procedimentos para transporte e içamento seguro de cargas especiais." },
];

const benefits = [
  { icon: Award, text: "Certificação reconhecida pelo mercado" },
  { icon: BookOpen, text: "Conteúdo prático e atualizado" },
  { icon: TrendingUp, text: "Alta empregabilidade para profissionais capacitados" },
];

const Courses = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="cursos" className="py-24 bg-surface-dark text-surface-dark-foreground" ref={ref}>
      <div className="container">
        <div className={`text-center max-w-2xl mx-auto mb-16 space-y-4 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Cursos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Invista na sua capacitação profissional
          </h2>
        </div>

        <div className={`grid lg:grid-cols-3 gap-8 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          {/* Courses list */}
          <div className="lg:col-span-2 space-y-4">
            {courses.map((course, i) => (
              <div
                key={course.title}
                className="bg-surface-dark-foreground/5 border border-surface-dark-foreground/10 p-6 rounded-sm hover:border-primary/40 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground font-display font-bold text-sm flex items-center justify-center rounded-sm">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-2">
                    <h4 className="font-display font-semibold text-lg">{course.title}</h4>
                    <p className="text-sm text-surface-dark-foreground/60 leading-relaxed">{course.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits + CTA */}
          <div className="space-y-6">
            <div className="bg-primary/10 border border-primary/20 p-8 rounded-sm space-y-6">
              <h3 className="font-display font-bold text-xl uppercase tracking-wide">Por que estudar na TREMA?</h3>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b.text} className="flex items-start gap-3">
                    <b.icon className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-sm text-surface-dark-foreground/80">{b.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://wa.me/5511999999999?text=Olá! Gostaria de me inscrever em um curso."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-4 bg-primary text-primary-foreground font-semibold text-sm uppercase tracking-wide rounded-sm hover:brightness-110 active:scale-[0.97] transition-all duration-200"
            >
              Quero me inscrever
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
