import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styles: [],
})
export class SwitchComponent {
  formulario: FormGroup = this.fb.group({
    genero: ['F', Validators.required],
    notificaciones: [true, Validators.required],
  });

  persona = {
    genero: 'F',
    notificationes: true,
  };

  constructor(private fb: FormBuilder) {}
}
