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
}
