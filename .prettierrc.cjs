// .prettierrc.cjs

module.exports = {
  singleQuote: true,
  semi: false,
  printWidth: 120,
  trailingComma: 'none',
  bracketSameLine: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindStylesheet: './src/style.css'
}
