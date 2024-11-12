/* empty css                                      */
import { c as createComponent, r as renderTemplate, d as renderComponent } from '../chunks/astro/server_7KwYiMtk.mjs';
import 'kleur/colors';
import { $ as $$MainLayouts } from '../chunks/MainLayouts_xRpi3O1K.mjs';
import { $ as $$Panel } from '../chunks/Panel_4GAWAx-x.mjs';
import { $ as $$Slider } from '../chunks/Slider_P5nrNp0i.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayouts", $$MainLayouts, { "title": "Home - UManizales Totem" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Panel", $$Panel, {})} ${renderComponent($$result2, "Slider", $$Slider, {})} ` })}`;
}, "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/index.astro", void 0);

const $$file = "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/index.astro";
const $$url = "/totem-um/dist";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
