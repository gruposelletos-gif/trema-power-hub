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
import imgShuttle from "@/assets/products/dispositivo-shuttle.jpeg";
import imgCavalete from "@/assets/products/cavalete-selagem.jpeg";
import imgBombas from "@/assets/products/bombas-hidraulicas.jpeg";
import imgUnidade from "@/assets/products/unidade-hidraulica.jpeg";

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
  {
    name: 'Dispositivo atuador / desviador de "Shuttle"',
    desc: "Dispositivo dotado de um cilindro pneumático de dupla ação, controlado por uma válvula direcional",
    image: imgShuttle,
  },
  {
    name: "Cavalete para selagem de bombas centrifugas",
    desc: "Controle da pressão de selagem das bombas centrífugas que bombeiam a polpa do minério de ferro.",
    image: imgCavalete,
  },
  {
    name: "Bombas Hidráulicas",
    desc: "Bombas hidráulicas diversos modelos. Palhetas, Pistão, Engrenagem e etc.",
    image: imgBombas,
  },
  {
    name: "Unidade Hidráulica",
    desc: "Unidade Hidráulica para Sistema de Jigagem",
    image: imgUnidade,
  },
];

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
            A Trema possui diversos produtos e ferramentas especiais para
            manutenção em equipamentos móveis e mineração.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`bg-background border border-border rounded-md overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: visible ? `${100 + index * 50}ms` : "0ms",
              }}
            >
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col flex-1 space-y-3">
                <div className="w-8 h-0.5 bg-primary rounded-full" />
                <h3 className="font-display font-semibold text-sm leading-snug">
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
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary text-primary-foreground px-3 py-2 text-xs font-semibold hover:bg-primary/90 active:scale-[0.97] transition-all duration-200"
                  >
                    Solicitar orçamento
                  </a>
                  <a
                    href="https://wa.me/5531993091735"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-xs font-semibold text-foreground hover:bg-accent hover:text-accent-foreground active:scale-[0.97] transition-all duration-200"
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
