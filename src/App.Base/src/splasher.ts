

interface PleaseWaitOptions {
  logo?: string;
  backgroundColor: string;
  loadingHtml: string;
}

interface PleaseWait {
  finish();
}

namespace Splash {

  export class Splasher {
    public static Instance: Splasher = new Splasher();

    private loadingScreen: PleaseWait;

    start() {
      if (!this.loadingScreen) {
        const ua = navigator.userAgent;
        const is_native_android = (ua.indexOf('Mozilla/5.0') > -1 && ua.indexOf('Android ') > -1 && ua.indexOf('AppleWebKit') > -1) && (ua.indexOf('Version') > -1);

        if (!is_native_android) {

          const pw = window['pleaseWait'];

          this.loadingScreen = pw({
            logo: '',
            backgroundColor: '#202328',
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
  }

  Splasher.Instance.start();
}
