module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({ stage: 1 }),
    // require('cssnano'),
    require('autoprefixer'),
    // require('stylelint'),
    require('postcss-bem-linter'),
  ]
}