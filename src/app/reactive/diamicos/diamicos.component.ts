import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-diamicos',
  templateUrl: './diamicos.component.html',
  styles: [],
})
export class DiamicosComponent {
  formulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array(
      [
        ['Metal Gear', Validators.required],
        ['DeathStranding', Validators.required],
      ],
      Validators.required
    ),
  });

  nuevoFavorito: FormControl = new FormControl('', Validators.required);

  get favoritosArr() {
    return this.formulario.get('favoritos') as FormArray;
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) return;
    this.favoritosArr.push(
      new FormControl(this.nuevoFavorito.value, Validators.required)
    );
    this.nuevoFavorito.reset();
  }

  esInvalido(campo: string) {
    return this.formulario?.controls[campo]?.errors && this.formulario.touched;
  }

  eliminarFavorito(index: number) {
    this.favoritosArr.removeAt(index);
  }

  guardar() {
    if (this.formulario.invalid) {
      this.formulario.markAsTouched();
      return;
    }
    console.log('hola');
  }

  constructor(private fb: FormBuilder) {}
}
