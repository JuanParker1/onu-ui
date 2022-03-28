import { theme as unoTheme } from '@unocss/preset-mini'
import { mergeDeep } from 'unocss'
import type { Preset } from '@unocss/core'
// import type { Theme } from '@unocss/preset-uno'

export function presetCui(): Preset {
  return {
    name: 'c-ui',
    theme: mergeDeep(unoTheme, {
      colors: {
        context: 'rgba(var(--cui-c-context),%alpha)'
      },
      fontFamily: {
        sans: 'Avenir, Helvetica, Arial, sans-serif'
      }
    }),
    rules: [],
    variants: [
      (input: string) => {
        const prefix = 'c-disabled:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[disabled] ${input}, ${input}[disabled]`
          }
        }
      },
      (input: string) => {
        const prefix = 'c-checked:'
        if (input.startsWith(prefix)) {
          return {
            matcher: input.slice(prefix.length),
            selector: input => `[checked] ${input}, ${input}[checked]`
          }
        }
      }
    ],
    shortcuts: {
      // general
      'c-bg-base': 'bg-white dark:bg-[#222]',
      'c-border-base': 'border-gray-400/50',
      'c-border-300': 'border-gray-400/40',
      'c-border-200': 'border-gray-400/25',
      'c-transition': 'transition-all duration-200',
      'c-focus-base': 'ring-2 ring-context/50',
      'c-active-base': 'ring-3 ring-context/10',
      'c-borderless': '!border-none !shadow-none',

      // button
      'c-button-base': 'border c-border-base rounded shadow-sm px-1em py-0.25em inline-flex items-center gap-1 op80 !outline-none',
      'c-button-hover': 'op100 !border-context text-context',
      'c-button-active': 'c-active-base bg-context/5',
      'c-button-icon': '-ml-0.2em mr-0.2em text-1.1em'
    }
  }
}
