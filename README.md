## :fire: Особенности
* используется препроцессор [SCSS](https://sass-lang.com/)
* используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах
* используется [Webpack](https://webpack.js.org/) для сборки JavaScript-модулей
* используется проверка кода на ошибки перед коммитом

## :hammer_and_wrench: Установка
* установите [NodeJS](https://nodejs.org/en/)
* скачайте необходимые зависимости: ```npm i```
* чтобы начать работу, введите команду: ```npm run dev (gulp)``` (режим разработки)
* чтобы собрать проект, введите команду ```npm run build``` (режим сборки)

## :open_file_folder: Файловая структура

```
gulp-starter-kit
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .babelrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```

* Корень папки:
    * ```.babelrc.js``` — настройки Babel
    * ```.bemrc.js``` — настройки БЭМ
    * ```.eslintrc.json``` — настройки ESLint
    * ```.gitignore``` – запрет на отслеживание файлов Git'ом
    * ```.stylelintrc``` — настройки Stylelint
    * ```.stylelintignore``` – запрет на отслеживание файлов Stylelint'ом
    * ```gulpfile.babel.js``` — настройки Gulp
    * ```webpack.config.js``` — настройки Webpack
    * ```package.json``` — список зависимостей
* Папка ```src``` - используется во время разработки:
    * блоки: ```src/blocks```
    * шрифты: ```src/fonts```
    * изображения: ```src/img```
    * JS-файлы: ```src/js```
    * страницы сайта: ```src/views/pages```
    * SCSS-файлы: ```src/styles```
    * HTML-файлы: ```src/views```
    * конфигурационный файл веб-сервера Apache с настройками [gzip](https://habr.com/ru/post/221849/) (сжатие без потерь): ```src/.htaccess```
* Папка ```dist``` - папка, из которой запускается локальный сервер для разработки (при запуске ```npm run dev```)
* Папка ```gulp-tasks``` - папка с Gulp-тасками

## :keyboard: Команды
* ```npm run lint:styles``` - проверить SCSS-файлы
* ```npm run lint:styles --fix``` - исправить ошибки в SCSS-файлах
* ```npm run lint:scripts``` - проверить JS-файлы
* ```npm run lint:scripts --fix``` - исправить ошибки в JS-файлах
* ```npm run dev (gulp)``` - запуск сервера для разработки проекта
* ```npm run build``` - собрать проект с оптимизацией без запуска сервера
* ```npm run build:views``` - собрать HTML-файлы
* ```npm run build:styles``` - скомпилировать SCSS-файлы
* ```npm run build:scripts``` - собрать JS-файлы
* ```npm run build:images``` - собрать изображения
* ```npm run build:sprites```- собрать спрайты
* ```npm run build:fonts``` - собрать шрифты
* ```npm run build:favicons``` - собрать фавиконки
* ```npm run build:gzip``` - собрать конфигурацию Apache

## :bulb: Рекомендации по использованию
### Страницы проекта
* страницы проекта находятся в папке ```src/views/pages```
    * главная страница: ```src/views/index.html```

### Шрифты
* шрифты находятся в папке ```src/fonts```
    * используйте [форматы](https://caniuse.com/#search=woff) ```.woff``` и ```.woff2```
    * шрифты подключаются в файл ```src/styles/base/_fonts.scss```
    * сконвертировать локальные шрифты можно с помощью [данного сервиса](https://onlinefontconverter.com/)

### Изображения
* изображения находятся в папке ```src/img```
    * изображение для генерации фавиконок должно находиться в папке ```src/img/favicon``` и иметь размер не менее ```1024px x 1024px```

### Сторонние библиотеки
* все сторонние библиотеки устанавливаются в папку ```node_modules```
    * для их загрузки воспользуйтеcь командой ```npm i package_name```

:warning: Если в вашем проекте используется несколько библиотек, которые необходимо подключать на нескольких страницах, во избежании ошибок нужно:
* по пути ```src/js/import``` создать папку ```pages```
* в папке ```pages``` создать js-файл для страницы, например, ```pageA.js```, и импортировать туда библиотеку, которая будет использоваться только на этой странице
    * аналогично проделать шаг для дополнительных страниц
* в файле ```webpack.config.js``` в точку входа добавить js-файлы страниц, пример:
```javascript
entry: {
    main: "./src/js/index.js",
    pageA: "./src/js/import/pages/pageA.js",
    pageB: "./src/js/import/pages/pageB.js"
}
```
* подключить скомпилированные js-файлы на необходимых страницах