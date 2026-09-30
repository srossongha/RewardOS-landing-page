// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

export default withNuxt({
  // Your custom config here
  files: ['app/components/ui/**'],
  rules: {
    'vue/require-default-prop': 'off',
  },
}).append(eslintConfigPrettier)
