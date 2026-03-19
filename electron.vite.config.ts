import { resolve } from 'path'
import { defineConfig } from 'electron-vite'
import { PrimeVueResolver } from '@primevue/auto-import-resolver'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  main: {},
  preload: {},
  renderer: {
    resolve: {
      alias: {
        src: resolve('src/renderer/src'),
        assets: resolve('src/renderer/src/assets')
      }
    },
    plugins: [
      vue(),
      tailwindcss(),
      Components({
        resolvers: [PrimeVueResolver()],
        dirs: ['src/components'],
        directoryAsNamespace: true,
        collapseSamePrefixes: true,
        dts: 'src/components.d.ts'
      })
    ]
  }
})
