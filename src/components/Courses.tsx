import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, BookOpen, CheckCircle, TrendingUp, Wrench, Users, ShieldCheck } from "lucide-react";
import oficinaImg from "@/assets/oficina.jpg";

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

const structurePoints = [
  { icon: Wrench, text: "Oficina equipada com bancadas, ferramentas e componentes reais para prática intensiva" },
  { icon: Users, text: "Instrutores com décadas de experiência em campo e ambiente industrial" },
  { icon: ShieldCheck, text: "Ambiente seguro, organizado e em conformidade com normas técnicas" },
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

        {/* Video highlight */}
        <div className={`mb-16 ${visible ? "animate-fade-up delay-100" : "opacity-0"}`}>
          <div className="relative rounded-sm overflow-hidden border border-surface-dark-foreground/10 aspect-video max-w-4xl mx-auto shadow-2xl">
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/videos/treinamento-1.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
          <p className="text-center text-sm text-surface-dark-foreground/50 mt-4">
            Veja na prática como são nossos treinamentos
          </p>
        </div>

        {/* Courses list + Benefits */}
        <div className={`grid lg:grid-cols-3 gap-8 mb-20 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}>
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

        {/* Estrutura para Treinamento */}
        <div className={visible ? "animate-fade-up delay-400" : "opacity-0"}>
          <div className="border-t border-surface-dark-foreground/10 pt-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative rounded-sm overflow-hidden border border-surface-dark-foreground/10 shadow-xl">
                <img
                  src={oficinaImg}
                  alt="Oficina e estrutura de treinamento da TREMA"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Nossa Estrutura
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight text-balance leading-tight">
                    Estrutura para Treinamento e Prática
                  </h3>
                </div>
                <p className="text-surface-dark-foreground/70 leading-relaxed text-pretty">
                  Na TREMA, os treinamentos acontecem em um ambiente técnico real, com oficina própria
                  totalmente equipada. Nossos alunos aprendem com os mesmos equipamentos, ferramentas
                  e componentes utilizados no dia a dia da manutenção de máquinas pesadas — garantindo
                  uma formação prática, imersiva e alinhada com as exigências do mercado.
                </p>
                <p className="text-surface-dark-foreground/70 leading-relaxed text-pretty">
                  São mais de 35 anos de experiência traduzidos em uma infraestrutura pensada
                  para formar profissionais prontos para atuar com segurança e eficiência.
                </p>

                <ul className="space-y-4 pt-2">
                  {structurePoints.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <item.icon className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-sm text-surface-dark-foreground/80">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
