import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Wrench, Users, ShieldCheck, Link2 } from "lucide-react";
import oficinaImg from "@/assets/oficina.jpg";
import manutencaoImg from "@/assets/courses/manutencao.jpg";
import mecatronicaImg from "@/assets/courses/mecatronica.jpg";
import arCondicionadoImg from "@/assets/courses/ar-condicionado.jpg";
import operacaoImg from "@/assets/courses/operacao.jpg";
import cargasImg from "@/assets/courses/cargas.jpg";

const courses = [
  {
    title: "Manutenção de Equipamentos Móveis",
    desc: "Curso completo com foco em manutenção preventiva e corretiva de escavadeiras, pás carregadeiras, retroescavadeiras e outros equipamentos.",
    image: manutencaoImg,
  },
  {
    title: "Mecatrônica Aplicada",
    desc: "Formação integrada em hidráulica, pneumática, elétrica e eletrônica para diagnóstico e reparo de sistemas complexos.",
    image: mecatronicaImg,
  },
  {
    title: "Manutenção de Ar Condicionado Automotivo",
    desc: "Melhor utilização do equipamento. Aumentar sua vida útil. Reduzir os custos com manutenção.",
    image: arCondicionadoImg,
  },
  {
    title: "Operação de Equipamentos Pesados",
    desc: "Treinamento prático para operação segura, produtiva e em conformidade com normas regulamentadoras.",
    image: operacaoImg,
  },
  {
    title: "Movimentação e Amarração de Cargas",
    desc: "Normas, técnicas e procedimentos para transporte e içamento seguro de cargas especiais.",
    image: cargasImg,
  },
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

        {/* Course cards grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28 ${
            visible ? "animate-fade-up delay-200" : "opacity-0"
          }`}
        >
          {courses.map((course) => (
            <article
              key={course.title}
              className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-full h-[240px] overflow-hidden bg-muted">
                <img
                  src={course.image}
                  alt={course.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="flex flex-col flex-1 p-8 text-center">
                <h3 className="font-display uppercase text-center text-[30px] leading-[1.1] font-semibold min-h-[72px] flex items-center justify-center">
                  {course.title}
                </h3>

                <p
                  className="mt-4 text-sm text-muted-foreground leading-relaxed overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {course.desc}
                </p>

                <div className="mt-auto pt-8 flex justify-center">
                  <a
                    href={`https://wa.me/5531993091735?text=${encodeURIComponent(
                      `Olá! Gostaria de saber mais sobre o curso: ${course.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Saiba mais sobre ${course.title}`}
                    className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-md hover:brightness-105 hover:shadow-yellow active:scale-95 transition-all duration-200"
                  >
                    <Link2 size={22} />
                  </a>
                </div>
              </div>
            </article>
          ))}
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
