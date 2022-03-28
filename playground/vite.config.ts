import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    Vue(),
    Unocss(),
    Components({
      dts: './src/components.d.ts',
      resolvers: [
        (name) => {
          const match = name.match(/^[cC]-?(.+)$/)
          if (match)
            return path.resolve('../packages/components/', match[1].toLowerCase(), './src/index.vue')
        }
      ]
    })
  ]
})
