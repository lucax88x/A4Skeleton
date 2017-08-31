import { Gulpclass, Task } from 'gulpclass/Decorators';

import config from '../config';

const spawn = require('child_process').spawn;

const argv = require('yargs').argv;

@Gulpclass()
export class Gulpfile {

    @Task('ng:serve', ['pug:build'])
    serve(cb) {
        this.ngCommand(['serve'], cb);
    }

    @Task('ng:test', [])
    test(cb) {
        this.ngCommand(['test'], cb);
    }

    @Task('ng:lint', [])
    lint(cb) {
        this.ngCommand(['lint'], cb);
    }

    @Task('ng:build', ['ng:lint', 'pug:build'])
    build(cb) {
        this.ngCommand(['build'], cb);
    }

    private ngCommand(commands: string[], cb) {
        const cmd = spawn('ng.cmd', commands, { stdio: 'inherit', cwd: config.ng.root });
        cmd.on('close', cb);
    }
}
