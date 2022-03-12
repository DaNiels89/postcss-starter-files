Notes
01. npm init -y
02. npm i -D postcss postcss-cli

03. npm i -D postcss-import
04. Create new file in root: postcss.config.js
05. Add in module.exports -> plugins -> require('postcss-import'),
06. @import in style.css
07. In package.json adjust "scripts" -> "postcss:watch": "postcss src/style.css --dir public --watch"
08. npm run postcss:watch

09. npm i -D cssnano postcss-preset-env
10. Add in module.exports -> plugins -> require('postcss-preset-env')({stage: 1}), & require('cssnano'),

11. Autoprefixer is automatically installed with postcss

12. postcss bem
13. stylelint






https://postcss.org/
https://sass-guidelin.es/#the-7-1-pattern





