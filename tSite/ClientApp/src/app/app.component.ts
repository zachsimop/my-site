import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fader]
})
export class AppComponent {

  getOutlet(outlet: RouterOutlet) {
    return outlet;
  }

}
