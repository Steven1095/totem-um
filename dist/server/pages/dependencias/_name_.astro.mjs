/* empty css                                         */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead } from '../../chunks/astro/server_DIxofdS6.mjs';
import 'kleur/colors';
import { $ as $$MainLayouts } from '../../chunks/MainLayouts_BCvPyPFV.mjs';
import { $ as $$Slider } from '../../chunks/Slider_BT-YCntq.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$name = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$name;
  function normalizeName(name) {
    return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, "-");
  }
  const response = await fetch("https://autoevaluacion.umanizales.edu.co/dependencias.json");
  const jsonData = await response.json();
  const dependencias = jsonData.Dependencias || [];
  const dependenciaName = Astro2.params.name ? decodeURIComponent(Astro2.params.name) : "";
  const dependencia = dependencias.find(
    (dep) => normalizeName(dep.name) === normalizeName(dependenciaName)
    // Compara nombres normalizados
  );
  if (!dependencia) {
    throw new Error("Dependencia no encontrada");
  }
  return renderTemplate`${renderComponent($$result, "MainLayouts", $$MainLayouts, { "title": dependencia.name }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="flex flex-1"> <div class="w-full relative bg-white"> <div class="w-full absolute top-0 h-72 bg-cover bg-center p-4" style="background: url('../../img/titulo_pagina.png');"> <div class="flex"> <!-- Columna de 80% --> <div class="w-4/5"> <h2 class="text-7xl text-slider-nav font-bold m-6 ml-32 text-left">${dependencia.name}</h2> </div> <!-- Columna de 20% --> <div class="w-1/5"> <a href="/dependencias" class="text-right text-botones hover:text-botones-hover mr-12 m-5"><img class="ml-12 mt-2" src="https://umanizales.edu.co/sites/default/files/2024-08/image.png" width="100" height="100"></a> </div> </div> <hr class="bg-botones h-3 w-1/2 -ml-4"> </div> <div class="w-full flex items-center justify-center h-4/5 mt-40"> <div class="grid grid-cols-6 gap-4"> <div class="col-start-2 col-span-4"> <img width="750px" height="400px" src="https://umanizales.edu.co/sites/default/files/2024-09/IMG_2733.jpg"> </div> <div class="col-start-2 col-span-4"> <p class="text-black text-2xl font-normal">${dependencia.name}</p> </div> <div class="col-start-2 col-end-4 mt-4"> <p class="tag w-full text-left text-3xl font-medium text-slider-nav">Lugar del evento:</p> <div class="flex mt-2"> <!-- Columna de 80% --> <div class="w-1/5 text-center align-middle"> <i class="fas fa-building mt-3 text-color-iconos text-4xl"></i> </div> <!-- Columna de 20% --> <div class="w-4/5"> <p class="text-black text-2xl font-normal">${dependencia.name}</p> </div> </div> </div> <div class="col-end-8 col-span-4 mt-4"> <p class="tag w-full text-left text-3xl font-medium text-slider-nav">Fecha y hora del evento:</p> <div class="flex mt-2"> <!-- Columna de 80% --> <div class="w-1/5 text-center align-middle"> <i class="fas fa-calendar-days mt-3 text-color-iconos text-4xl"></i> </div> <!-- Columna de 20% --> <div class="w-4/5"> <!-- <p class="text-black text-2xl font-medium">{dayName} {monthName}</p>
                <p class="text-black text-2xl font-normal">{hour}</p> --> </div> </div> </div> <div class="col-start-2 col-end-4 mt-4"> <p class="tag w-full text-left text-3xl font-medium text-slider-nav">Modalidad:</p> <div class="flex mt-2"> <!-- Columna de 80% --> <div class="w-1/5 text-center"> <i class="fas fa-location-dot mt-3 text-color-iconos text-4xl"></i> </div> <!-- Columna de 20% --> <div class="w-4/5"> <p class="text-black text-2xl font-normal">${dependencia.name}</p> </div> </div> </div> <div class="col-start-2 col-end-4 mt-4"> ${dependencia.name && renderTemplate`<p class="tag w-full text-left text-3xl font-medium text-slider-nav">Moderador:</p>
            <div class="flex mt-2"> <!-- Columna de 80% --> <div class="w-1/5 text-center"> <i class="fas fa-user mt-3 text-color-iconos text-4xl"></i> </div> <!-- Columna de 20% --> <div class="w-4/5"> <p class="text-black text-2xl font-normal">${dependencia.name}</p> </div> </div>`} </div> </div> </div> </div> </div>  ${renderComponent($$result2, "Slider", $$Slider, {})} ` })}`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/dependencias/[name].astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/dependencias/[name].astro";
const $$url = "/totem-um/dist/dependencias/[name]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$name,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
