import { Gulpclass, Task } from 'gulpclass/Decorators';

let spawn = require('child_process').spawn;

const argv = require("yargs").argv;

@Gulpclass()
export class Gulpfile {

    @Task("web:work", ["pug:build:watch", "ng:serve", "content:watch"])
    work(cb) { cb(); }

    @Task("web:build", ["pug:build", "ng:build", "content:copy"])
    build(cb) { cb(); }
} 