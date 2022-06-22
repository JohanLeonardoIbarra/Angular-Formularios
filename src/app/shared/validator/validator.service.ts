import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorService {
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  noPuedeSerStrider(control: FormControl): ValidationErrors | null {
    const valor = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      return {
        noStrider: true,
      };
    }
    return null;
  }

  sonIguales(campo: string, campo2: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const { password, confirm } = formGroup?.value;
      if (password !== confirm) {
        formGroup.get(campo2)?.setErrors({ noIguales: true });
        return {
          diferentes: true,
        };
      }
      formGroup.get(campo2)?.setErrors(null);
      return null;
    };
  }

  constructor() {}
}
