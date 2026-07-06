import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Award, BookOpen, TrendingUp, Wrench, Users, ShieldCheck, ArrowRight } from "lucide-react";
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
    <section id="cursos" className="py-28 lg:py-36 bg-background" ref={ref}>
      <div className="container-wide">
        <div className={`max-w-3xl mb-16 space-y-6 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="eyebrow">Cursos</span>
          <h2 className="heading-lg text-balance">Invista na sua capacitação profissional</h2>
        </div>

        {/* Video highlight */}
        <div className={`mb-24 ${visible ? "animate-fade-up delay-100" : "opacity-0"}`}>
          <div className="relative rounded-2xl overflow-hidden aspect-video max-w-5xl mx-auto shadow-elevated">
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
          <p className="text-center text-xs uppercase tracking-[0.22em] text-muted-foreground mt-6">
            Veja na prática como são nossos treinamentos
          </p>
        </div>

        {/* Courses list + Benefits */}
        <div className={`grid lg:grid-cols-3 gap-8 mb-28 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          <div className="lg:col-span-2 space-y-3">
            {courses.map((course, i) => (
              <div
                key={course.title}
                className="group bg-card border border-border p-7 rounded-2xl hover:border-foreground hover:shadow-soft transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <span className="flex-shrink-0 font-display text-3xl text-primary tabular-nums w-14">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-2 flex-1">
                    <h4 className="font-display text-xl uppercase leading-tight">{course.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{course.desc}</p>
                  </div>
                  <ArrowRight size={18} className="text-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all mt-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="bg-foreground text-background p-8 rounded-2xl space-y-6 shadow-elevated">
              <h3 className="font-display text-2xl uppercase tracking-wide">Por que estudar na TREMA?</h3>
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b.text} className="flex items-start gap-3">
                    <b.icon className="text-primary flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-sm text-background/80">{b.text}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/5531993091735?text=Olá! Gostaria de me inscrever em um curso."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-4 bg-primary text-primary-foreground font-semibold text-xs uppercase tracking-[0.2em] rounded-full hover:brightness-105 active:scale-[0.97] transition-all duration-200"
              >
                Quero me inscrever
              </a>
            </div>
          </div>
        </div>

        {/* Estrutura para Treinamento */}
        <div className={visible ? "animate-fade-up delay-400" : "opacity-0"}>
          <div className="border-t border-border pt-20">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div className="lg:order-2 relative rounded-2xl overflow-hidden shadow-elevated group">
                <img
                  src={oficinaImg}
                  alt="Oficina e estrutura de treinamento da TREMA"
                  className="w-full h-[520px] object-cover group-hover:scale-105 transition-transform duration-[1500ms]"
                  loading="lazy"
                />
              </div>

              <div className="lg:order-1 space-y-6">
                <span className="eyebrow">Nossa Estrutura</span>
                <h3 className="heading-md text-balance">
                  Estrutura para Treinamento e Prática
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Na TREMA, os treinamentos acontecem em um ambiente técnico real, com oficina própria
                  totalmente equipada. Nossos alunos aprendem com os mesmos equipamentos, ferramentas
                  e componentes utilizados no dia a dia da manutenção de máquinas pesadas — garantindo
                  uma formação prática, imersiva e alinhada com as exigências do mercado.
                </p>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  São mais de 35 anos de experiência traduzidos em uma infraestrutura pensada
                  para formar profissionais prontos para atuar com segurança e eficiência.
                </p>

                <ul className="space-y-4 pt-2">
                  {structurePoints.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <item.icon className="text-primary flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-sm text-foreground/80">{item.text}</span>
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
