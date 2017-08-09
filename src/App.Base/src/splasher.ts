interface PleaseWaitOptions {
  logo?: string;
  backgroundColor: string;
  loadingHtml: string;
}

interface PleaseWait {
  finish();
}

interface PleaseWaitStatic {
  (options: PleaseWaitOptions): PleaseWait;
}

namespace Splash {

  export class Splasher {
    private loadingScreen: PleaseWait;

    start() {
      if (!this.loadingScreen) {
        let ua = navigator.userAgent;
        let is_native_android = ((ua.indexOf("Mozilla/5.0") > -1 && ua.indexOf("Android ") > -1 && ua.indexOf("AppleWebKit") > -1) && (ua.indexOf("Version") > -1));

        if (!is_native_android) {

          let pw: PleaseWaitStatic = window["pleaseWait"];

          this.loadingScreen = pw({
            logo: "",
            backgroundColor: "#202328",
            loadingHtml: `<div class="sk-folding-cube">
                          <div class="sk-cube1 sk-cube"></div>
                          <div class="sk-cube2 sk-cube"></div>
                          <div class="sk-cube4 sk-cube"></div>
                          <div class="sk-cube3 sk-cube"></div>
                        </div>`
          });
        }
      }
    }

    stop() {
      if (this.loadingScreen) {
        this.loadingScreen.finish();
        delete this.loadingScreen;
      }
    }

    public static Instance: Splasher = new Splasher();
  }

  Splasher.Instance.start();
}