Notes 01. npm init -y 02. npm i -D postcss postcss-cli

3.  npm i -D postcss-import
4.  Create new file in root: postcss.config.js
5.  Add in module.exports -> plugins -> require('postcss-import'),
6.  @import in style.css
7.  In package.json adjust "scripts" -> "postcss:watch": "postcss src/style.css --dir public --watch"
8.  npm run postcss:watch

9.  npm i -D cssnano postcss-preset-env
10. Add in module.exports -> plugins -> require('postcss-preset-env')({stage: 1}), & require('cssnano'),

11. npm i -D autoprefixer
12. Add in module.exports -> plugins -> require('autoprefixer'),

13. npm i -D stylelint stylelint-config-standard stylelint-config-prettier
14. npm i -D prettier eslint-config-prettier eslint-plugin-prettier

15. npm i -D postcss-bem-linter

Run Stylelint on all the CSS files in your project:
npx stylelint "\*_/_.css" (command is: npx stylelint "starstar/star.css")
npx stylelint "\*_/_.{css,js}" (command is: npx stylelint "starstar/star.{css,js}")

https://postcss.org/
https://sass-guidelin.es/#the-7-1-pattern
https://stylelint.io/user-guide/get-started
