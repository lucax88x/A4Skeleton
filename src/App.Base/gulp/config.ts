import path = require('path');

interface AngularConfiguration {
    root: string;
}

interface PugConfiguration {
    src: string;
    dest: string;
}

class Configuration {
    ng: AngularConfiguration;
    pug: PugConfiguration;

    constructor() {
        this.ng = {
            root: this.normalize(".")
        }
        this.pug = {
            src: this.normalize("./src/**/*.pug"),
            dest: this.normalize("./src/")
        }
    }

    //to what . is pointed to
    private rootDir: string = "./src/App.Base";

    private normalize(str) {
        return path.join(this.rootDir, str);
    }
    private normalizeArr(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i] = this.normalize(arr[i]);
        }
        return arr;
    }
}

export default new Configuration();