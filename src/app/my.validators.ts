import {FormControl} from "@angular/forms";

export class MyValidators {

  static restrictedEmail(control: FormControl): { [key: string]: boolean } {

    // @ts-ignore
    if (['v@mail.ru', 'test@mail'].includes(control.value)) {
      return {
        restrictedEmail: true
      }
    }
    // @ts-ignore
    return null
  }

}
