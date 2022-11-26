import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable({
  providedIn:'root'
  })

export class AppCounterService {
  counter = 0;

  constructor(private logService:LogService) {
    logService.log(this.counter.toString())
  }

  increase() {
    this.counter++
    this.logService.log(this.counter.toString())
  }

  decrease() {
    this.counter--
    this.logService.log(this.counter.toString())
  }
}
