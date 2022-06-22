import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidarorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  formulario: FormGroup = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorService.emailPattern),
        ],
        [this.emailValidator],
      ],
      username: [
        '',
        [Validators.required, this.validatorService.noPuedeSerStrider],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', [Validators.required]],
    },
    {
      validators: this.validatorService.sonIguales('password', 'confirm'),
    }
  );

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidator: EmailValidarorService
  ) {}

  ngOnInit(): void {
    this.formulario.reset({
      nombre: 'ADasad sADsad',
      email: 'test1@test.com',
      username: 'equis',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.formulario.controls[campo].invalid &&
      this.formulario.controls[campo].touched
    );
  }

  // emailRequired() {
  //   return (
  //     this.formulario.get('email')?.touched &&
  //     this.formulario.get('email')?.errors?.['required']
  //   );
  // }

  // emailFormato() {
  //   return (
  //     this.formulario.get('email')?.touched &&
  //     this.formulario.get('email')?.errors?.['pattern']
  //   );
  // }

  // emailTomado() {
  //   return (
  //     this.formulario.get('email')?.touched &&
  //     this.formulario.get('email')?.errors?.['emailtomado']
  //   );
  // }

  submitForm() {
    console.log(this.formulario.value);
    this.formulario.markAllAsTouched();
  }
}
