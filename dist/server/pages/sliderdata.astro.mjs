/* empty css                                      */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DIxofdS6.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$SliderData = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Slider -->${maybeRenderHead()}<div x-data="{ 
  activeSlide: 0, 
  slides: [
    '../img/galeria_totem/1.png',
    '../img/galeria_totem/2.png',
    '../img/galeria_totem/3.png',
    '../img/galeria_totem/4.png',
    '../img/galeria_totem/5.png',
    '../img/galeria_totem/6.png',
    '../img/galeria_totem/7.png',
    '../img/galeria_totem/8.png',
    '../img/galeria_totem/9.png',
    '../img/galeria_totem/10.png',
    '../img/galeria_totem/11.png',
    '../img/galeria_totem/12.png',
    '../img/galeria_totem/13.png',
    '../img/galeria_totem/14.png',
    '../img/galeria_totem/15.png',
    '../img/galeria_totem/17.png',
    '../img/galeria_totem/18.png',
    '../img/galeria_totem/19.png',
    '../img/galeria_totem/20.png',
    '../img/galeria_totem/21.png',
    '../img/galeria_totem/22.png',
    '../img/galeria_totem/23.png',
    '../img/galeria_totem/24.png', 
    '../img/galeria_totem/25.png'
  ],
  init() {
    this.startAutoSlide();
  },
  startAutoSlide() {
    setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }, 10000); // Cambia de imagen cada 10 segundos
  }
}" class="relative h-screen overflow-hidden"> <!-- Contenedor del Slider --> <div class="flex w-full h-full transition-transform duration-500" :style="{ transform: 'translateX(-' + (activeSlide * 100) + '%)' }"> <!-- Recorre las diapositivas --> <template x-for="(slide, index) in slides" :key="index"> <div class="w-full flex-shrink-0"> <img :src="slide" class="w-full h-full object-cover"> </div> </template> </div> <!-- Flecha Izquierda --> <button @click="activeSlide = activeSlide === 0 ? slides.length - 1 : activeSlide - 1" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-4 rounded-full text-2xl">
&#10094;
</button> <!-- Flecha Derecha --> <button @click="activeSlide = activeSlide === slides.length - 1 ? 0 : activeSlide + 1" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-4 rounded-full text-2xl">
&#10095;
</button> </div>`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/SliderData.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/SliderData.astro";
const $$url = "/totem-um/dist/SliderData";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SliderData,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
