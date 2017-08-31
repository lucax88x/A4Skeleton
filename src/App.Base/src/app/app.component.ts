import { ChangeDetectionStrategy, Component } from '@angular/core';

import { routerTransition } from './app.transitions';

@Component({
  selector: 'app-root',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  ngOnInit() {
    Splash.Splasher.Instance.stop();
  }
}
