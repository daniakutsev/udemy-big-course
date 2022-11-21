import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputValue = ''

  title = 'Dynamic title'
  number = 42
  arr = [1, 2, 3]
  obj = {a: 1, b: {c: 2}}

  // img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFc_jMja-dFi6-ABOdQ3GSxSQoL88lbwwOIA&usqp=CAU"

  // @ts-ignore
  constructor() {
    // setTimeout(() => {
    //   this.img = "https://cdn.iconscout.com/icon/free/png-256/angular-2752246-2285063.png"
    // }, 3000)
  }

  onInput(event: any) {
    this.inputValue = (<HTMLInputElement>event.target).value
    console.log(event)
  }

  onBlur(str: string) {
    this.inputValue = str
  }
}
