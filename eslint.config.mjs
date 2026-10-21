// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import betterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { getDefaultAttributes } from 'eslint-plugin-better-tailwindcss/api/defaults'
import prettierConfig from 'eslint-config-prettier'

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
    files: ['app/components/bits/rotating-text.vue'],
    rules: {
      'better-tailwindcss/no-unknown-classes': [
        'error',
        { ignore: ['^rotating-text'] } // 👈 Added this to ignore rotating-text classes
      ]
    }
  },
  {
    files: ['app/components/development/DevelopmentHero.vue'],
    rules: {
      'better-tailwindcss/no-unknown-classes': [
        'error',
        { ignore: ['^animate-systems-', '^animate-delay-'] } // 👈 Expanded or checked these patterns
      ]
    }
  },
  {
    rules: {
      'vue/no-multiple-template-root': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/html-self-closing': 'off'
    }
  },
  prettierConfig
)
