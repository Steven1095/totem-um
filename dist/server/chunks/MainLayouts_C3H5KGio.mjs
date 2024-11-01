/* empty css                              */
import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro, f as renderSlot, e as renderHead, d as renderComponent } from './astro/server_CqfnIhi3.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */

const $$Astro$1 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$MainLayouts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayouts;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es" data-astro-cid-dflsp22b> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', '><script src="https://kit.fontawesome.com/cf40b44f14.js" crossorigin="anonymous"><\/script><!-- Quill -> Editor Wysiwyg --><link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"><title>', "</title>", "", '</head> <body data-astro-cid-dflsp22b> <main data-astro-cid-dflsp22b> <div class="h-screen flex flex-col" data-astro-cid-dflsp22b> ', " </div> </main> </body></html>"])), addAttribute(Astro2.generator, "content"), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-dflsp22b": true }), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/components/Layouts/MainLayouts.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/components/Layouts/MainLayouts.astro";
const $$url = "/totem-um/dist/components/Layouts/MainLayouts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$MainLayouts,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayouts as $, _page as _ };
