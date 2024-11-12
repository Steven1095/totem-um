/* empty css                                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_7KwYiMtk.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Buscador2 = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch({"ASSETS_PREFIX": undefined, "BASE_URL": "/totem-um/dist/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true}.API_DEPENDENCIAS_URL);
  const data = await response.json();
  console.log(data);
  const dependencias = data.map((dependencia) => ({
    name: dependencia.name,
    icon: dependencia.icon
  })) || [];
  console.log(dependencias);
  return renderTemplate(_a || (_a = __template(["", `<div x-ref="demo" class="flex w-full md:w-1/2 items-start p-4 md:p-10 justify-center bg-gray-300 md:h-full overflow-y-scroll"> <div x-data="pokeSearch()" x-init="fetchPokemon()" class="mx-auto flex flex-col p-10"> <div class="flex flex-row"> <input type="text" name="pokemonSearch" x-model="pokemonSearch" class="flex w-2/3 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"> <button type="submit" @click="fetchPokemon()" class="flex bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" :class="[ isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700' ]" :disabled="isLoading">
Search
</button> </div> <template x-if="pokemon"> <div class="flex flex-row pt-10"> <div class="flex mr-4"> <!-- <img :src="pokemon.sprkites.front_default" :alt="pokemon.name"> --> </div> <div class="text-sm justify-center flex flex-col"> <h3 class="text-gray-900 text-sm font-bold uppercase leading-none mb-2" x-text="pokemon.name"></h3> <div class="flex flex-row flex-wrap"> <template x-for="abilityObj in pokemon.name" :key="abilityObj.ability.url"> <span x-text="abilityObj.ability.name" class="flex bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700"></span> </template> </div> </div> </div> </template> <div class="flex flex-row pt-10"> <div class="flex mr-4"> <!-- <img :src="pokemon.sprites.front_default" :alt="pokemon.name" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="bulbasaur"> --> </div> <div class="text-sm justify-center flex flex-col"> <h3 class="text-gray-900 text-sm font-bold uppercase leading-none mb-2" x-text="pokemon.name">bulbasaur</h3> <div class="flex flex-row flex-wrap"> <template x-for="abilityObj in pokemon.name" :key="abilityObj.name"></template> </div> </div> </div> <script type="text/javascript">
        function pokeSearch() {
          return {
            pokemonSearch: "biblioteca",
            pokemon: null,
            isLoading: false,
            fetchPokemon() {
              this.isLoading = true;
              fetch(\`https://autoevaluacion.umanizales.edu.co/dependencias/\${this.pokemonSearch}\`)
                .then((res) => res.json())
                .then((data) => {
                  this.isLoading = false;
                  this.pokemon = data;
                });
            },
          };
        }
      </script> </div> </div>`], ["", `<div x-ref="demo" class="flex w-full md:w-1/2 items-start p-4 md:p-10 justify-center bg-gray-300 md:h-full overflow-y-scroll"> <div x-data="pokeSearch()" x-init="fetchPokemon()" class="mx-auto flex flex-col p-10"> <div class="flex flex-row"> <input type="text" name="pokemonSearch" x-model="pokemonSearch" class="flex w-2/3 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"> <button type="submit" @click="fetchPokemon()" class="flex bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" :class="[ isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700' ]" :disabled="isLoading">
Search
</button> </div> <template x-if="pokemon"> <div class="flex flex-row pt-10"> <div class="flex mr-4"> <!-- <img :src="pokemon.sprkites.front_default" :alt="pokemon.name"> --> </div> <div class="text-sm justify-center flex flex-col"> <h3 class="text-gray-900 text-sm font-bold uppercase leading-none mb-2" x-text="pokemon.name"></h3> <div class="flex flex-row flex-wrap"> <template x-for="abilityObj in pokemon.name" :key="abilityObj.ability.url"> <span x-text="abilityObj.ability.name" class="flex bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700"></span> </template> </div> </div> </div> </template> <div class="flex flex-row pt-10"> <div class="flex mr-4"> <!-- <img :src="pokemon.sprites.front_default" :alt="pokemon.name" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="bulbasaur"> --> </div> <div class="text-sm justify-center flex flex-col"> <h3 class="text-gray-900 text-sm font-bold uppercase leading-none mb-2" x-text="pokemon.name">bulbasaur</h3> <div class="flex flex-row flex-wrap"> <template x-for="abilityObj in pokemon.name" :key="abilityObj.name"></template> </div> </div> </div> <script type="text/javascript">
        function pokeSearch() {
          return {
            pokemonSearch: "biblioteca",
            pokemon: null,
            isLoading: false,
            fetchPokemon() {
              this.isLoading = true;
              fetch(\\\`https://autoevaluacion.umanizales.edu.co/dependencias/\\\${this.pokemonSearch}\\\`)
                .then((res) => res.json())
                .then((data) => {
                  this.isLoading = false;
                  this.pokemon = data;
                });
            },
          };
        }
      </script> </div> </div>`])), maybeRenderHead());
}, "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/components/Buscador2.astro", void 0);
const $$file = "C:/Users/ASUS/Documents/Desarrollo/totem-um/src/pages/components/Buscador2.astro";
const $$url = "/totem-um/dist/components/Buscador2";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Buscador2,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
