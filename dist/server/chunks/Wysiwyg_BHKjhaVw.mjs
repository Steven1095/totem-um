/* empty css                              */
import { c as createComponent, r as renderTemplate, a as addAttribute, m as maybeRenderHead } from './astro/server_CqfnIhi3.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Wysiwyg = createComponent(($$result, $$props, $$slots) => {
  let editorContent = "";
  return renderTemplate(_a || (_a = __template(['<!-- Enlaces CDN de Quill --><link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">', '<div> <label for="description" class="block text-md font-medium text-slider-nav">Descripci\xF3n</label> <div id="editor" class="block w-full h-40 bg-transparent rrounded-md border-2 border-gray-400"></div> <input type="hidden" name="description"', `> </div> <script>
  document.addEventListener("DOMContentLoaded", () => {
    const toolbarOptions = [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }],
      ['clean']
    ];

    const quill = new Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions
      },
      placeholder: 'Escribe aqu\xED la descripci\xF3n...',
    });

    quill.on('text-change', () => {
      document.querySelector('input[name="description"]').value = quill.root.innerHTML;
    });
  });
<\/script>`])), maybeRenderHead(), addAttribute(editorContent, "value"));
}, "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/admin/Wysiwyg.astro", void 0);

const $$file = "C:/Users/cym_webmanager/Documents/Astro/totem_um/src/pages/admin/Wysiwyg.astro";
const $$url = "/totem-um/dist/admin/Wysiwyg";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Wysiwyg,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Wysiwyg as $, _page as _ };
