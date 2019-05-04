'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

    var path = {
        build: { //Тут мы укажем куда складывать готовые после сборки файлы
            html: 'build/',
            js: 'build/js/',
            css: 'build/css/',
            img: 'build/img/',
            fonts: 'build/fonts/'
        },
        src: { //Пути откуда брать исходники
            html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
            js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
            style: 'src/style/main.scss',
            img: 'src/img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
            fonts: 'src/fonts/**/*.*'
        },
        watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
            html: 'src/**/*.html',
            js: 'src/js/**/*.js',
            style: 'src/style/**/*.scss',
            img: 'src/img/**/*.*',
            fonts: 'src/fonts/**/*.*'
        },
        clean: './build'
    };



    gulp.task('html', function () {
        return gulp.src(path.src.html) //Выберем файлы по нужному пути
            .pipe(rigger()) //Прогоним через rigger
            .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
            .pipe(reload({stream: true})) //И перезагрузим наш сервер для обновлений
            .pipe(browserSync.reload({
                stream: true
            }));
    });

    gulp.task('js', function () {
        return gulp.src(path.src.js) //Найдем наш main файл
            .pipe(rigger()) //Прогоним через rigger
            .pipe(sourcemaps.init()) //Инициализируем sourcemap
            .pipe(uglify()) //Сожмем наш js
            .pipe(sourcemaps.write()) //Пропишем карты
            .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
            .pipe(reload({stream: true})); //И перезагрузим сервер
    });

    gulp.task('style', function () {
        return  gulp.src(path.src.style) //Выберем наш main.scss
            .pipe(sourcemaps.init()) //То же самое что и с js
            .pipe(sass()) //Скомпилируем
            .pipe(prefixer()) //Добавим вендорные префиксы
            .pipe(cleanCSS()) //Сожмем
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(path.build.css)) //И в build
            .pipe(reload({stream: true}))
            .pipe(browserSync.reload({
                stream: true
            }));
    });

    gulp.task('image', function () {
        return gulp.src(path.src.img) //Выберем наши картинки
            .pipe(imagemin({ //Сожмем их
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()],
                interlaced: true
            }))
            .pipe(gulp.dest(path.build.img)) //И бросим в build
            .pipe(reload({stream: true}));
    });

    gulp.task('server', function () {
        browserSync.init({
          server: {
            baseDir: path.clean
          },
          reloadOnRestart: true,
          tunnel: 'remote'
        });
        gulp.watch(path.watch.html, gulp.parallel('html'));
        gulp.watch(path.watch.style, gulp.parallel('style'));
        gulp.watch(path.watch.js, gulp.parallel('js'));
        gulp.watch(path.watch.img, gulp.parallel('image'));
      });
      

    // gulp.task('webserver', function () {
    //     browserSync(config);
    // });

    gulp.task('build', gulp.series(
        'html',
        'js',
        'style',
        'js',
        'image'
    ));

    gulp.task('dev', gulp.series(
         'build', 'server'
    ));
   
  
