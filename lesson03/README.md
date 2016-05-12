Lesson 3 — Build. Gulp. code Style.
----
## Lecture

**Video Link** [Webinar Video 3](https://youtu.be/bu18dQfdKTs) 

**Presentation** [Presentation 3](https://yadi.sk/i/XyTOOqpTpAMoL)

----
## Homework

### Портируем задачи сделанные на уроке

Необходимо используя материалы из `class1` сделать сборку.
Ваш gulp файл должен содержать следующие задачи:

1. Task `default` запускает task `libs` и task `build`.
2. Task `bower` выкачивает bower зависимости в папку `libs`.
3. Task `build` запускает task `copy-static` и task `css`.
4. Task `libs` копирует все `*.min.js` из папки `libs` в `bin/libs` с сохранением структуры внутренних папок. 
   Например: `bin/libs/jquery/dist/jquery.min.js`.
5. Task `images` копирует все файлы `*.png *.jpg *.svg` в папку `bin` с сохранением структуры внутренних папок.
   При этом не должны копироваться файлы из директорий `node_modules` и `libs`.
6. Task `html` копирует все файлы `*.html` в папку `bin` с сохранением структуры внутренних папок.
   При этом не должны копироваться файлы из директорий `node_modules` и `libs`.     
7. Task `css` объединяет все `*.less` файлы, проходится less препроцессором, минифицирует файл с помощью `cssnano`. 
    Результат задачи записывается в файл `bin/static/styles.css`. Если задача вызвана с флагом `--prod`,
    то добавляет sourcemap.
8. Task `clean` очищает папку `bin`.
9. Task `watch` осцществляем слежение за файлами проекта и автоматический запуск соотвествующих задач пересборки:
    * обновление `*.png *.jpg *.svg` запускает task `images`.
    * обновление `*.html` запускает task `html`.
    * обновление `*.less` запускает task `css`.
    * обновление `*.js` запускает task `js`.
    
### Добавляем новые задачи

1. Сделать сборку js файлов.
    * Concat.
    * Uglify.
    * Посместить результат в `bin`.
    * Для css и js добавить sourcemaps если `prod` сборка (gulp js --prod)
2. Code style
    * csscomb - поправить стили в исходных файлах.
    * JSCS — поправить стили в исходных файлах.
    * JSHint — вывести ошибки.
    * htmlhint — поправить стили в исходных файлах.
3. Livereload or Browsersynq.
4. Минификация html — если `prod` сборка.
5. Sourcemaps для js и css.
6. Таска `default` должна собирать css, js, html, картинки.
7. Таска `style` должна прогонять все code style задачи.
8. Поключить `autoprefixer` к вашему css. 

### Advanced задание

Для всех code style задач сделать:

1. При вызове команды например `gulp csscomb` стили будут причесываться ТОЛЬКО в тех файлах,
 которые были изменены с последнего комита (те файлы котрые показываются в `git status` как `modified`).
2. Добавить возможность причесать все файлы вне зависимости от `git status`, например `gulp csscomb --all`.

## Links
------

### Read and Watch

1. [Gulp screen cast (ru)](http://learn.javascript.ru/screencast/gulp)
2. [Code style webinar (ru)](https://www.youtube.com/watch?v=ma4fllzVXGA)

### Docs

1. [Gulp docs (en)](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
2. [Gulp API (en)](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
