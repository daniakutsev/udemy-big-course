import {Component} from '@angular/core';
import {AppCounterService} from "./services/appCounter.service";
import {LocalCounterService} from "./services/localCounter.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[LocalCounterService]
})
export class AppComponent {
  constructor(public appCounterService: AppCounterService,
              public localCounterService:LocalCounterService
              ) {
  }
}
