import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  // @ts-ignore
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email, Validators.required
      ]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(5)
      ]),
      adress: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('')
      })
    })
  }

  submit() {
    const formData = {...this.form.value}
    console.log(formData)
  }

  chooseCapital() {
    const cityMap = {
      ua: 'Киев',
      ru: 'Москва',
      by: 'Минск'
    }
    // @ts-ignore
    const cityKey = this.form?.get('adress')?.get('country').value
    // @ts-ignore
    const city = cityMap[cityKey]

    this.form.patchValue({adress: {city}})

  }
}
