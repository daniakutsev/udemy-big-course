import {Component} from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `Counter: {{counter}}`
})

export class CounterComponent {

  counter: number = 0

  increment() {
    return this.counter++
  }

  decrement() {
    return this.counter--
  }

}
