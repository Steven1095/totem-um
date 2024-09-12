import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  base: process.env.NODE_ENV === 'production' ? '/totem-um/dist/' : '/',
  build: {
    outDir: 'dist',
  },
  server: {
    host: true, // Permite que el servidor sea accesible desde otros dispositivos si es necesario
  }
  // output: "server",
  // adapter: node({
  //   /*mode: "standalone"*/ /// Solo contenido estático
  //   mode: "standalone"
  // })
});