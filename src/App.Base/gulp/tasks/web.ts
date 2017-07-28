import gulp = require('gulp');
import { Gulpclass, Task } from 'gulpclass/Decorators';

import logger from '../../../../gulp/logger';
import config from '../config';

let spawn = require('child_process').spawn;


const argv = require("yargs").argv;

@Gulpclass()
export class Gulpfile {

    @Task("web:work", ["pug:build:watch", "ng:serve"])
    work() { }

    @Task("web:build", ["pug:build", "ng:build"])
    build() { }
} 