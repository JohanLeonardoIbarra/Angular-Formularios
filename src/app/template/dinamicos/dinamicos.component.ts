import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [],
})
export class DinamicosComponent {
  @ViewChild('dinamicForm') formulario!: NgForm;

  persona: Persona = {
    nombre: 'Johan',
    favoritos: [
      { id: 1, nombre: 'CSGO' },
      { id: 2, nombre: 'WR' },
    ],
  };

  guardar() {
    console.log('Formulario posteado');
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

  validarNombre() {
    return (
      this.formulario?.controls['nombre']?.errors &&
      this.formulario?.controls['nombre']?.touched
    );
  }
}
