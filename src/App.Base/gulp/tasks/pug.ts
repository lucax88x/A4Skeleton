import gulp = require('gulp');
import batch = require('gulp-batch');
import debug = require('gulp-debug');
import plumber = require('gulp-plumber');
import pug = require('gulp-pug');
import { Gulpclass, Task } from 'gulpclass/Decorators';

import logger from '../../../../gulp/logger';
import config from '../config';


const argv = require("yargs").argv;

@Gulpclass()
export class Gulpfile {

    @Task("pug:build")
    build() {
        logger.info(`compiling ${config.pug.src}`);

        return gulp.src(config.pug.src)
            .pipe(plumber())
            .pipe(debug({ title: 'pug:build', minimal: true }))
            .pipe(pug({ verbose: argv.verbose }))
            .pipe(gulp.dest(config.pug.dest))
    }

    @Task("pug:build:watch", ["pug:build"])
    watch() {
        logger.info(`watching on ${config.pug.src}`);
        return gulp.watch(config.pug.src, batch((events, done: Function) => {
            events.on('data', () => {
                gulp.start("pug:build");
            });

            events.on('end', done);
        }));
    }
} 