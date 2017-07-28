import { Gulpclass, Task } from "gulpclass/Decorators";

import gulp = require("gulp");
import list = require('gulp-task-listing');
import requireDir = require('require-dir');
// var gutil = require('gulp-util');

requireDir('./gulp/tasks', { recurse: true });
requireDir('./src/App.Base/gulp/tasks', { recurse: true });

@Gulpclass()
export class Gulpfile {

    @Task()
    default() {
        return list();
    }

    // @Task("build", ["server:build", "web:build"])
    @Task("build", ["web:build"])
    build() { }
}

// gulp.task('build', ["server:build", "client:build"]);
// gulp.task('deploy', ["server:octopus:deploy"]);

// gulp.task('default', function () {
//     console.log(gutil.colors.green("Arguments"));
//     console.log("------------------------------");
//     console.log(gutil.colors.blue("--verbose => more logs"));
//     console.log(gutil.colors.blue("--notify => provides a windows notifier when tasks finish"));
//     console.log(gutil.colors.blue("--channels=value => specifies the channel for octopus (will automatically be appended to `Development.%value`) [" + Object.keys(config.server.channels) + "]"));
//     console.log(gutil.colors.blue("--config=web|admin -> build web or admin"));
//     console.log(gutil.colors.blue("--prod -> enables minification"));

//     return list();
// });

