import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";

import img119 from "@/assets/products/new-119.jpg";
import img119_1 from "@/assets/products/new-119-1.jpg";
import img120 from "@/assets/products/new-120.jpg";
import img121 from "@/assets/products/new-121.jpg";
import img122 from "@/assets/products/new-122.jpg";
import img126_1 from "@/assets/products/new-126-1.jpg";
import img127 from "@/assets/products/new-127.jpg";
import img132 from "@/assets/products/new-132.jpg";

const products = [
  {
    name: "Kit Super Útil",
    desc: "Com o 'KIT SUPER ÚTIL' as tomadas de pressões hidráulicas são feitas de forma fácil e segura.",
    images: [img126_1, img127],
  },
  {
    name: "Kit Digital para Tomadas de Pressões Hidráulicas",
    desc: "Kit composto por manômetro digital, microtubos para alta pressão e adaptadores diversos.",
    images: [img119, img119_1, img120],
  },
  {
    name: "Kit Turbo de Lubrificação",
    desc: "O Kit Turbo de lubrificação prolonga a vida útil em até 5 vezes os turbos compressores equipados nos motores térmicos.",
    images: [img132],
  },
  {
    name: "Vedações em Geral",
    desc: "Retentores, anéis o'ring em borracha nitrílica, viton, silicone, neoprene, teflon e outros.",
    images: [img122, img121],
  },
  {
    name: "Manômetro R134a com Engates Rápidos",
    desc: "Conjunto completo, incluindo bloco manifold, 1 manômetro de alta pressão, 1 manômetro de baixa pressão, 3 mangueiras com 1,5 metros cada, 1 engate rápido para alta pressão, 1 engate rápido para baixa pressão e 1 maleta para acomodação.",
    images: [img121, img126_1],
  },
  {
    name: "Refrigerante R134a",
    desc: "Botija de gás R134a 13,6 kg.",
    images: [img127],
  },
];

function ImageGallery({ images, name }: { images: string[]; name: string }) {
  const [current, setCurrent] = useState(0);
  const hasMultiple = images.length > 1;

  return (
    <div className="relative aspect-[4/3] bg-muted overflow-hidden">
      <img
        src={images[current]}
        alt={name}
        className="w-full h-full object-cover transition-opacity duration-500"
        loading="lazy"
      />
      {hasMultiple && (
        <>
          <button
            onClick={() => setCurrent((p) => (p - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-background transition-colors active:scale-95"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setCurrent((p) => (p + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-background transition-colors active:scale-95"
            aria-label="Próxima foto"
          >
            <ChevronRight size={16} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  i === current ? "bg-primary w-4" : "bg-background/60"
                }`}
                aria-label={`Foto ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

const Products = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="produtos" className="py-24 bg-yellow-subtle" ref={ref}>
      <div className="container">
        <div
          className={`text-center max-w-2xl mx-auto mb-16 space-y-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Produtos e Kits
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
            Produtos e Kits
          </h2>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            A Tremat possui diversos produtos e ferramentas especiais para manutenção em equipamentos móveis e mineração.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`bg-background border border-border rounded-md overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: visible ? `${150 + index * 80}ms` : "0ms",
              }}
            >
              <ImageGallery images={product.images} name={product.name} />

              <div className="p-6 flex flex-col flex-1 space-y-4">
                <div className="w-10 h-1 bg-primary rounded-full" />
                <h3 className="font-display font-semibold text-lg leading-snug">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {product.desc}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="https://wa.me/5531993091735?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20o%20produto%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:bg-primary/90 active:scale-[0.97] transition-all duration-200"
                  >
                    Solicitar orçamento
                  </a>
                  <a
                    href="https://wa.me/5531993091735"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-accent hover:text-accent-foreground active:scale-[0.97] transition-all duration-200"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
