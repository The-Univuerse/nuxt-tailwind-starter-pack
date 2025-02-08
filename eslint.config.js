import antfu from '@antfu/eslint-config'


export default antfu({
  type: 'lib',
  formatters: true,
  vue: {
    overrides: {
      "vue/component-name-in-template-casing": ['error', 'PascalCase', {registeredComponentsOnly: false}]
      //'component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
    }
  },
  // vue: {
  //   'vue/block-tag-newline': 'error',
  // },
  // vue: {
  //   overrides: {
  //     'vue/block-tag-newline': 'error',
  //   },
  // },

  typescript: true,
  stylistic: true,
  perfectionist: true,
  imports: true,
})

