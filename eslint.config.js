import antfu from '@antfu/eslint-config'

export default antfu({
  type: 'lib',
  formatters: true,
  vue: {
    overrides: {
      'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
      'vue/singleline-html-element-content-newline': ['error'],
      'vue/prefer-true-attribute-shorthand': ['error'],
      'vue/first-attribute-linebreak': [
        'off',
        {
          singleline: 'beside',
          multiline: 'below',
        },
      ],
      'vue/no-empty-component-block': ['error'],
      'vue/multiline-html-element-content-newline': ['error'],
      'vue/mustache-interpolation-spacing': ['error'],
      'vue/html-self-closing': ['error', {
        html: {
          normal: 'never',
          void: 'always',
        },
        svg: 'always',
        math: 'always',
      }],
    },
  },
  typescript: true,
  stylistic: true,
  perfectionist: true,
  imports: true,
  eslint: true,
})
