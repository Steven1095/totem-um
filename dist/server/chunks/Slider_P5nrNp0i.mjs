/* empty css                              */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './astro/server_7KwYiMtk.mjs';
import 'kleur/colors';
import 'clsx';
import scrapeIt from 'scrape-it';

const $$Slider = createComponent(async ($$result, $$props, $$slots) => {
  const { data } = await scrapeIt("https://umanizales.edu.co/", {
    articles: {
      listItem: ".node--type-slide",
      data: {
        title: ".text-content>.field--name-node-title>h3",
        content: ".text-content>div>h2",
        tags: ".text-content>div>p",
        url: {
          selector: "a",
          attr: "href"
        },
        image: {
          selector: ".field--name-field-main-image>img",
          attr: "src"
        }
      }
    }
  });
  const articles = data.articles;
  const articlesJson = JSON.stringify(articles);
  console.log(articlesJson);
  return renderTemplate`<!-- Slider -->${maybeRenderHead()}<div x-data="{ 
    activeSlide: 0,
    articles: [],    
    init() {
        this.startAutoSlide();
    },
    startAutoSlide() {
        setInterval(() => {
            this.activeSlide = (this.activeSlide + 1) % this.articles.length;
        }, 10000); // Cambia de imagen cada 10 segundos
    } 
}" x-init="init()" data-articles="{{ articlesJson }}" class="h-1/3 flex overflow-hidden relative"> <!-- Contenedor del Slider --> <div class="flex transition-transform duration-500" :style="\`transform: translateX(-\${activeSlide * 100}%)\`"> ${articles.map((article, index) => renderTemplate`<div class="w-full flex-shrink-0 relative"> <div class="block w-full h-full relative"> <img${addAttribute(`https://umanizales.edu.co${article.image}`, "src")}${addAttribute(article.title, "alt")} class="w-full h-full object-cover"> <div class="flex absolute inset-0 items-end justify-center bg-slider-nav bg-opacity-50 p-8 pb-44"> <div class="flex flex-col items-center space-y-4"> <h3 class="text-6xl font-bold text-white text-center">${article.title}</h3> <p class="text-3xl font-bold text-white text-center">${article.content}</p> <p class="text-3xl font-bold text-white text-center">${article.tags}</p> <a${addAttribute(article.url, "href")} type="button" class="rounded-full bg-botones px-16 py-5 text-4xl font-medium text-white shadow-sm hover:bg-botones-hover">
Ver más
</a> </div> </div> </div> </div>`)} </div> <!-- Botones de navegación --> <button @click="activeSlide = (activeSlide === 0) ? articles.length - 1 : activeSlide - 1" class="absolute top-1/2 left-0 transform -translate-y-1/2 bg-botones text-white p-2 rounded-full ml-10 text-4xl w-20 h-20 items-center justify-center">
&#10094;
</button> <button @click="activeSlide = (activeSlide === articles.length - 1) ? 0 : activeSlide + 1" class="absolute top-1/2 right-0 transform -translate-y-1/2 bg-botones text-white p-2 rounded-full mr-10 text-4xl w-20 h-20 items-center justify-center">
&#10095;
</button> <!-- Indicadores --> <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2"> <template x-for="(article, index) in articles" :key="index"> <button @click="activeSlide = index" :class="activeSlide === index ? 'bg-botones' : 'bg-gray-500'" class="w-3 h-3 rounded-full"></button> </template> </div> </div>`;
}, "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/components/Slider.astro", void 0);

const $$file = "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/components/Slider.astro";
const $$url = "/totem-um/dist/components/Slider";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Slider,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Slider as $, _page as _ };
