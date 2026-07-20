import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle } from "lucide-react";

import imgKitTurbo from "@/assets/products/kit-turbo-lubrificacao.png";
import imgKitSuperUtil from "@/assets/products/kit-super-util.jpeg";
import imgKitDigital from "@/assets/products/kit-digital.jpeg";
import imgKitCommonRail from "@/assets/products/kit-common-rail.jpeg";
import imgDispositivoPreCarga from "@/assets/products/dispositivo-pre-carga.jpeg";
import imgManometro from "@/assets/products/manometro-r134a.jpeg";
import imgTermometro from "@/assets/products/termometro-digital.jpeg";
import imgBalanca from "@/assets/products/balanca-eletronica.png";
import imgRefrigerante from "@/assets/products/refrigerante-r134a.png";
import imgBombaVacuo from "@/assets/products/bomba-vacuo.jpeg";
import imgClipadeira from "@/assets/products/clipadeira-hidraulica.jpeg";
import imgOleo from "@/assets/products/oleo-compressor.jpeg";
import imgInjetor from "@/assets/products/injetor-oleo.jpeg";
import imgGasR141b from "@/assets/products/gas-r141b.jpeg";
import imgGarrafaInjetora from "@/assets/products/garrafa-injetora.jpeg";
import imgCompressores from "@/assets/products/compressores-ar.jpeg";
import imgRegulador from "@/assets/products/regulador-pressao.jpeg";
import imgSacaPolia from "@/assets/products/saca-polia.jpeg";
import imgVedacoes from "@/assets/products/vedacoes-geral.jpeg";
import imgAcumuladores from "@/assets/products/acumuladores-nitrogenio.jpeg";

const products = [
  {
    name: "kit Turbo de lubrificação",
    desc: "O Kit Turbo de lubrificação prolonga a vida útil em até 5 vezes os turbos compressores equipados nos motores térmicos.",
    image: imgKitTurbo,
  },
  {
    name: "Kit Super Útil",
    desc: 'Com o "KIT SUPER ÚTIL" as tomadas de pressões hidráulicas são feitas de forma fácil e segura.',
    image: imgKitSuperUtil,
  },
  {
    name: "Kit digital para tomadas de pressões hidráulicas",
    desc: "Kit composto por manômetro digital, microtubos para alta pressão e adaptadores diversos",
    image: imgKitDigital,
  },
  {
    name: "Kit common rail",
    desc: "Ferramenta especial para medir as pressões e avaliar o desempenho das bombas do sistema de injeção diesel Common Rail.",
    image: imgKitCommonRail,
  },
  {
    name: "Dispositivo universal para pré carga em acumuladores",
    desc: "Ferramenta universal para aplicação de pré carga em acumuladores a nitrogênio.",
    image: imgDispositivoPreCarga,
  },
  {
    name: "Manômetro R134a com engates rápidos",
    desc: "Conjunto completo, incluindo bloco manifold, 1 manômetro de alta pressão, 1 manômetro de baixa pressão, 3 mangueiras com 1,5 metros cada, 1 engate rápido para alta pressão, 1 engate rápido para baixa pressão e 1 maleta para acomodação.",
    image: imgManometro,
  },
  {
    name: "Termômetro digital tipo espeto",
    desc: "Medição de temperatura: -50°C ~ +300°C (-58°C ~ +572°F). Precisão da temperatura: ±1°C (±2°F)",
    image: imgTermometro,
  },
  {
    name: "Balança eletrônica para garrafa de gás",
    desc: "Capacidade: 100 kg. Display LCD com iluminação. Bateria longa vida.",
    image: imgBalanca,
  },
  {
    name: "Refrigerante R134a",
    desc: "Botija de gás R134a 13,6 kg",
    image: imgRefrigerante,
  },
  {
    name: "Bomba de vácuo",
    desc: "Bomba de vácuo 7CFM duplo estágio 110V/220V",
    image: imgBombaVacuo,
  },
  {
    name: "Clipadeira hidráulica portátil",
    desc: "Clipa mangueiras com trama de aço e de nylon das seguintes milimetragens: 6mm 8mm 10mm 12mm",
    image: imgClipadeira,
  },
  {
    name: "Óleo para compressor",
    desc: "O Óleo Sintético ISO VG 32 é utilizado em compressores de refrigeração.",
    image: imgOleo,
  },
  {
    name: "Injetor de óleo no sistema de ar condicionado",
    desc: "Injetor de óleo profissional e de fácil manuseio",
    image: imgInjetor,
  },
  {
    name: "Gás R141b",
    desc: "Gás para limpeza de sistema de refrigeração R141b",
    image: imgGasR141b,
  },
  {
    name: "Garrafa injetora de gás 141b",
    desc: "Excelente para remover excesso de óleo refrigerante e qualquer outro tipo de impurezas do sistema do ar condicionado",
    image: imgGarrafaInjetora,
  },
  {
    name: "Compressores para Ar Condicionado Automotivo",
    desc: "Compressores para todas linhas de equipamentos.",
    image: imgCompressores,
  },
  {
    name: "Regulador de pressão para nitrogênio",
    desc: "Utilizado cilindros de Nitrogênio N2",
    image: imgRegulador,
  },
  {
    name: "Saca polia universal",
    desc: "Saca polia universal para compressores automotivos",
    image: imgSacaPolia,
  },
  {
    name: "Vedações em Geral",
    desc: "Retentores, anéis o'ring em borracha nitrílica, viton, silicone, neoprene, teflon e outros",
    image: imgVedacoes,
  },
  {
    name: "Acumuladores a Nitrogênio",
    desc: "Venda e/ou manutenção de acumuladores a nitrogênio (N²) empregados em diferentes circuitos hidráulicos.",
    image: imgAcumuladores,
  },
];

const Products = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="produtos" className="py-28 lg:py-36 bg-surface-alt" ref={ref}>
      <div className="container-wide">
        <div
          className={`grid lg:grid-cols-12 gap-10 mb-16 items-end transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="lg:col-span-7 space-y-6">
            <span className="eyebrow">Produtos e Kits</span>
            <h2 className="heading-lg text-balance">
              Ferramentas especiais para{" "}
              <span className="text-primary italic font-light [font-family:'Barlow'] normal-case tracking-normal">
                manutenção pesada
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-border">
            <p className="text-muted-foreground leading-relaxed">
              A Trema possui diversos produtos e ferramentas especiais para
              manutenção em equipamentos móveis e mineração.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group bg-card border border-border rounded-2xl overflow-hidden flex flex-col hover:shadow-elevated hover:-translate-y-1 hover:border-foreground/40 transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: visible ? `${100 + index * 40}ms` : "0ms",
              }}
            >
              <div className="aspect-square bg-background overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1200ms]"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-background/80 backdrop-blur px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.18em] font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 space-y-4">
                <h3 className="font-display text-base uppercase leading-tight tracking-wide">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {product.desc}
                </p>

                <div className="flex flex-col gap-2 pt-2">
                  <a
                    href={`https://wa.me/5531993091735?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20o%20produto%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-primary hover:text-primary-foreground active:scale-[0.97] transition-all duration-300"
                  >
                    Solicitar orçamento
                  </a>
                  <a
                    href="https://wa.me/5531993091735"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] font-semibold text-foreground hover:border-foreground active:scale-[0.97] transition-all duration-300"
                  >
                    <MessageCircle size={12} /> WhatsApp
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
