import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { createVuePlugin } from "vite-plugin-vue2";
import ViteComponents from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'

const config = defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },

  build: {
    minify: true,
  },

  plugins: [
    vue(),
    // createVuePlugin(),
    ViteComponents({
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: 'icon',
        })
      ],
    }),
    ViteIcons({
      defaultStyle: '',
    }),
    WindiCSS()
  ],

  server: {
    port: 9930,
  },
})

export default config
