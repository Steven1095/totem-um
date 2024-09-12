/* empty css                               */
import { c as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BsEV8pba.mjs';
import 'kleur/colors';
import { $ as $$MainLayouts } from '../chunks/MainLayouts_DcVQ13my.mjs';
import { $ as $$Slider } from '../chunks/Slider_BcoE4qzN.mjs';
import { $ as $$Buscador } from '../chunks/Buscador_afToEt0g.mjs';
export { renderers } from '../renderers.mjs';

const $$Dependencias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayouts", $$MainLayouts, { "title": "Dependencias - UManizales Totem" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-1"> <div class="w-full relative bg-white"> <div class="w-full absolute top-0 h-72 bg-cover bg-center p-4" style="background: url('./img/titulo_pagina.png');"> <div class="grid grid-cols-2 gap-2"> <h2 class="text-7xl text-slider-nav font-bold m-6 ml-32 text-left">Dependencias</h2> <a href="./" class="text-right text-botones hover:text-botones-hover mr-12 m-5 text-8xl"><img class="ml-80 mt-2" src="https://umanizales.edu.co/sites/default/files/2024-08/image.png" width="100" height="100"></a> </div> <hr class="bg-botones h-3 w-2/3 -ml-4"> </div> <!-- Lista de depedencias --> <div class="flex mt-52 justify-center h-full"> <div class="grid grid-cols-1 w-10/12"> <!-- <p class="text-4xl bg-gray-120 p-5" style="z-index: 1;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>            --> <div class="mt-10"> ${renderComponent($$result2, "Buscador", $$Buscador, {})} <!-- <div class="flex max-h-[800px] w-full flex-col overflow-y-scroll mt-12">
                            <button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5">
                                <div class="flex h-24 w-1/6 items-center group-hover:bg-green-200">
                                    <p class="tag w-full text-center text-5xl font-medium text-gray-600 group-hover:text-green-900">
                                        <i class="fas fa-user-friends"></i>
                                    </p>
                                </div>
                                <div class="flex w-full flex-col items-start justify-between">
                                    <p class="text-left text-4xl text-slider-nav font-semibold">División de Desarrollo Humano</p>
                                </div>
                            </button>
                            <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center">
                            <button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5">
                                <div class="flex h-24 w-1/6 items-center group-hover:bg-green-200">
                                    <p class="tag w-full text-center text-5xl font-medium text-gray-600 group-hover:text-green-900">
                                        <i class="fas fa-handshake"></i>
                                    </p>
                                </div>
                                <div class="flex w-full flex-col items-start justify-between">
                                    <p class="text-left text-4xl text-slider-nav font-semibold">Proyección Social</p>
                                </div>
                            </button>                            
                            <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center">
                            <button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5">
                                <div class="flex h-24 w-1/6 items-center group-hover:bg-green-200">
                                    <p class="tag w-full text-center text-5xl font-medium text-gray-600 group-hover:text-green-900">
                                        <i class="fas fa-briefcase"></i>
                                    </p>
                                </div>
                                <div class="flex w-full flex-col items-start justify-between">
                                    <p class="text-left text-4xl text-slider-nav font-semibold">Administrativa y Financiera</p>
                                </div>
                            </button>                            
                            <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center">
                            <button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5">
                                <div class="flex h-24 w-1/6 items-center group-hover:bg-green-200">
                                    <p class="tag w-full text-center text-5xl font-medium text-gray-600 group-hover:text-green-900">
                                        <i class="fas fa-bullhorn"></i>
                                    </p>
                                </div>
                                <div class="flex w-full flex-col items-start justify-between">
                                    <p class="text-left text-4xl text-slider-nav font-semibold">Comunicaciones y Mercadeo</p>
                                </div>
                            </button>                            
                            <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center">
                            <button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5">
                                <div class="flex h-24 w-1/6 items-center group-hover:bg-green-200">
                                    <p class="tag w-full text-center text-5xl font-medium text-gray-600 group-hover:text-green-900">
                                        <i class="fas fa-flask"></i>
                                    </p>
                                </div>
                                <div class="flex w-full flex-col items-start justify-between">
                                    <p class="text-left text-4xl text-slider-nav font-semibold">Investigaciones y Posgrados</p>
                                </div>
                            </button>                            
                            <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center">
                            <button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5">
                                <div class="flex h-24 w-1/6 items-center group-hover:bg-green-200">
                                    <p class="tag w-full text-center text-5xl font-medium text-gray-600 group-hover:text-green-900">
                                        <i class="fas fa-file-alt"></i>
                                    </p>
                                </div>
                                <div class="flex w-full flex-col items-start justify-between">
                                    <p class="text-left text-4xl text-slider-nav font-semibold">Registro Académico</p>
                                </div>
                            </button>                            
                            <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center">
                            <button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5">
                                <div class="flex h-24 w-1/6 items-center group-hover:bg-green-200">
                                    <p class="tag w-full text-center text-5xl font-medium text-gray-600 group-hover:text-green-900">
                                        <i class="fas fa-laptop-code"></i>
                                    </p>
                                </div>
                                <div class="flex w-full flex-col items-start justify-between">
                                    <p class="text-left text-4xl text-slider-nav font-semibold">Tecnologías de la Información</p>
                                </div>
                            </button>                            
                            <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center">
                            <button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5">
                                <div class="flex h-24 w-1/6 items-center group-hover:bg-green-200">
                                    <p class="tag w-full text-center text-5xl font-medium text-gray-600 group-hover:text-green-900">
                                        <i class="fas fa-globe"></i>
                                    </p>
                                </div>
                                <div class="flex w-full flex-col items-start justify-between">
                                    <p class="text-left text-4xl text-slider-nav font-semibold">Internacionalización</p>
                                </div>
                            </button>                            
                            <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center">
                            <button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5">
                                <div class="flex h-24 w-1/6 items-center group-hover:bg-green-200">
                                    <p class="tag w-full text-center text-5xl font-medium text-gray-600 group-hover:text-green-900">
                                        <i class="fas fa-lightbulb"></i>
                                    </p>
                                </div>
                                <div class="flex w-full flex-col items-start justify-between">
                                    <p class="text-left text-4xl text-slider-nav font-semibold">Innovación y Emprendimiento</p>
                                </div>
                            </button>                            
                            <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center">
                            <button class="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100 mt-5">
                                <div class="flex h-24 w-1/6 items-center group-hover:bg-green-200">
                                    <p class="tag w-full text-center text-5xl font-medium text-gray-600 group-hover:text-green-900">
                                        <i class="fas fa-book"></i>
                                    </p>
                                </div>
                                <div class="flex w-full flex-col items-start justify-between">
                                    <p class="text-left text-4xl text-slider-nav font-semibold">Biblioteca</p>
                                </div>
                            </button>                            
                            <hr class="bg-yellow-500 h-1 w-1/2 -ml-28 items-center">
                        </div> --> </div> </div> </div> </div> </div>  ${renderComponent($$result2, "Slider", $$Slider, {})} ` })}`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/dependencias.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/dependencias.astro";
const $$url = "/dependencias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dependencias,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
