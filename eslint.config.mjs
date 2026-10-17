// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { getDefaultAttributes } from 'eslint-plugin-better-tailwindcss/api/defaults'

export default withNuxt(
  betterTailwindcss.configs['correctness-error'],
  {
    settings: {
      'better-tailwindcss': {
        entryPoint: 'app/assets/css/main.css',
        attributes: [...getDefaultAttributes(), ['^v-bind:ui$', [{ match: 'objectValues' }]]]
      }
    }
  },
  {
    files: ['server/**/*.ts'],
    rules: {
      '@stylistic/operator-linebreak': ['error', 'after'],
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }]
    }
  },
  {
    files: ['app/components/bits/staggered-menu.vue'],
    rules: {
      'better-tailwindcss/no-unknown-classes': [
        'error',
        { ignore: ['^sm-', '^staggered-menu-', '^fixed-wrapper$'] }
      ]
    }
  },
  {
    rules: {
      'vue/no-multiple-template-root': 'off'
    }
  }
)
