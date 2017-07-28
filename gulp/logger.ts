import notifier = require('node-notifier');

const argv = require("yargs").argv;
const gutil = require("gulp-util");

class Logger {
    log(msg: string, args?) {
        if (args)
            gutil.log(msg, args);
        else
            gutil.log(msg);
    };
    info(msg: string, args?) {
        if (argv.verbose) {
            this.log(gutil.colors.blue(msg), args);
        }

    };
    warn(msg: string, args?) {
        this.log(gutil.colors.bgYellow(msg), args);
    };
    notify(msg: string) {
        this.info(msg);

        if (argv.notify) {
            notifier.notify({
                'title': 'Logger',
                'message': msg
            });
        }
    };
    error(msg: string, args?) {
        this.log(gutil.colors.red(msg), args);
    };
    success(msg: string, args?) {
        this.log(gutil.colors.green(msg), args);
    };
};


export default new Logger();