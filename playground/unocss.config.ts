import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetOnu } from '@onu-ui/unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      prefix: '',
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
    presetOnu(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
})
