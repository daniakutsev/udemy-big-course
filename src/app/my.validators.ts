import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

// @ts-ignore
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

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(()=>{
        if (control.value === 'uniq@mail.ru') {
          resolve({uniqEmail: true})
        } else {
          resolve(null)
        }
      },1000)
    })
  }

}
