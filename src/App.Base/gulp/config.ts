import path = require('path');

interface AngularConfiguration {
    root: string;
}

interface PugConfiguration {
    src: string;
    dest: string;
}

interface ImagesConfiguration {
    src: string;
    dest: string;
}

interface FontsConfiguration {
    src: string;
    dest: string;
}

class Configuration {
    build: string = "../App.Base/src/assets/";
    ng: AngularConfiguration;
    pug: PugConfiguration;
    images: ImagesConfiguration;
    fonts: FontsConfiguration;

    constructor() {
        this.ng = {
            root: this.normalize(".")
        }
        this.pug = {
            src: this.normalize("./src/**/*.pug"),
            dest: this.normalize("./src/")
        }
        this.images = {
            src: this.normalizeArr([
                './src/images/**'
            ]),
            dest: this.normalize(this.build + 'images/')
        }
        this.fonts = {
            src: this.normalizeArr([
                './node_modules/font-awesome/fonts/FontAwesome.otf',
                './node_modules/font-awesome/fonts/fontawesome-webfont.eot',
                './node_modules/font-awesome/fonts/fontawesome-webfont.svg',
                './node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
                './node_modules/font-awesome/fonts/fontawesome-webfont.woff',
                './node_modules/font-awesome/fonts/fontawesome-webfont.woff2'
            ]),
            dest: this.normalize(this.build + 'fonts/')
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