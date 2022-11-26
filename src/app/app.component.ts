import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


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
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  submit() {
    const formData = {...this.form.value}
    console.log(formData)
  }
}
