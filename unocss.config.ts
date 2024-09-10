import { defineConfig } from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
  ],
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    colors: {
      'black': '#111111',
      'grey-lighter': '#F9FAFB',
      'grey-light': '#F0F2F6',
      'grey-darker': '#8E8E8E',
      'primary': '#675FFF',
      'primary-dark': '#5147FF',
    },
  },
})
