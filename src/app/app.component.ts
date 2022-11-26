import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  // @ts-ignore
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({})
  }

  submit() {
    console.log(this.form)
  }
}
