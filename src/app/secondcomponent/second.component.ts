import {Component} from '@angular/core';
import {AppCounterService} from "../services/appCounter.service";
import {LocalCounterService} from "../services/localCounter.service";


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  providers:[LocalCounterService]
})
export class SecondComponent {
  constructor(public appCounterService: AppCounterService,
              public localCounterService:LocalCounterService
              ) {
  }
}
