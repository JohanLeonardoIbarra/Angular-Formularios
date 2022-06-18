import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  //  guardar( formularioNg:NgForm ){
  guardar() {
    console.log('Guardado Exitoso');
    this.miFormulario.resetForm();
  }

  nombreValido(): boolean {
    return (
      this.miFormulario?.form.controls['producto']?.invalid &&
      this.miFormulario?.form.controls['producto']?.touched
    );
  }

  precioValido(): boolean {
    return (
      this.miFormulario?.value.precio < 0 &&
      this.miFormulario?.controls['precio']?.touched
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
