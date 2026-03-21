import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle } from "lucide-react";

const products = [
  { name: "Kits com Manômetros Digitais e Analógicos", desc: "Conjuntos completos para medição de pressão em sistemas hidráulicos e pneumáticos." },
  { name: "Kit Turbo – Lubrificação de Turbos", desc: "Ferramenta especializada para teste e lubrificação de turbocompressores." },
  { name: "Kit Flowmeter com Sensores", desc: "Medidor de vazão com sensores integrados para diagnóstico preciso de circuitos." },
  { name: "Kit Diagnóstico Common Rail", desc: "Equipamento completo para teste de sistemas Common Rail de injeção diesel." },
  { name: "Ferramentas para Ar Condicionado", desc: "Ferramentas específicas para manutenção de sistemas de climatização veicular." },
  { name: "Sensores e Equipamentos de Medição", desc: "Sensores de temperatura, pressão e rotação para análise técnica avançada." },
  { name: "Vedações e Peças em Geral", desc: "Linha completa de vedações, o-rings, retentores e componentes de reposição." },
];

const Products = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="produtos" className="py-24 bg-yellow-subtle" ref={ref}>
      <div className="container">
        <div className={`text-center max-w-2xl mx-auto mb-16 space-y-4 ${visible ? "animate-fade-up" : "opacity-0"}`}>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Peças, kits e ferramentas de diagnóstico
          </h2>
          <p className="text-muted-foreground text-pretty">
            Equipamentos profissionais para manutenção de máquinas pesadas.
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ${visible ? "animate-fade-up delay-200" : "opacity-0"}`}>
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-background border border-border p-6 rounded-sm space-y-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <div className="w-10 h-1 bg-primary rounded-full" />
              <h4 className="font-display font-semibold text-lg leading-snug">{product.name}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{product.desc}</p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline active:scale-[0.97] transition-transform"
              >
                <MessageCircle size={14} /> Solicitar orçamento
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
