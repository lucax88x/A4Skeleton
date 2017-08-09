import gulp = require('gulp');
import cache = require('gulp-cached');
import debug = require('gulp-debug');
import gulpif = require('gulp-if');
import plumber = require('gulp-plumber');
import imagemin = require('gulp-imagemin');
import { Gulpclass, Task } from 'gulpclass/Decorators';

import config from '../config';

const argv = require("yargs").argv;

@Gulpclass()
export class Gulpfile {
    @Task("content:copy-fonts")
    copyFonts() {
        return gulp.src(config.fonts.src)
            .pipe(plumber())
            .pipe(debug({ title: 'content:copy-fonts', minimal: true }))
            .pipe(cache("fonts"))
            .pipe(gulp.dest(config.fonts.dest));
    }

    @Task("content:copy-images")
    copyImages() {
        return gulp.src(config.images.src)
            .pipe(plumber())
            .pipe(debug({ title: 'content:copy-images', minimal: true }))
            .pipe(gulpif(argv.prod, imagemin({ optimizationLevel: 4 })))
            .pipe(gulp.dest(config.images.dest));
    }

    @Task("content:copy-images:watch")
    copyImagesAndWatch() {
        return gulp.watch(config.images.src, ["content:copy-images"]);
    }

    @Task("content:copy", ["content:copy-images", "content:copy-fonts"])
    copy(cb) { cb(); }

    @Task("content:watch", ["content:copy-images:watch"])
    watch(cb) { cb(); }
}
