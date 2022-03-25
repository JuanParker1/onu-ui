import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    Vue(),
    Unocss(),
    Components({
      dirs: ['../packages/components'],
      resolvers: [
        // (name) => {
        //   return { importName: `C${name}`, path: 'c-ui' }
        // }
      ],
      directoryAsNamespace: true
      // globalNamespaces: ['src']
    })
  ]
})
