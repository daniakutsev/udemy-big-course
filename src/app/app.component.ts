import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "./my.validators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  // @ts-ignore
  form: FormGroup

  ngOnInit() {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmail
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('')
      }),

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
    const cityKey = this.form?.get('address')?.get('country').value
    // @ts-ignore
    const city = cityMap[cityKey]

    this.form.patchValue({address: {city}})
  }


}
