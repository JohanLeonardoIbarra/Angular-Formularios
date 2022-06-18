import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//Modules C
import { ReactiveRoutingModule } from './reactive-routing.module';
//Components
import { BasicosComponent } from './basicos/basicos.component';
import { DiamicosComponent } from './diamicos/diamicos.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [BasicosComponent, DiamicosComponent, SwitchComponent],
  imports: [CommonModule, ReactiveRoutingModule, ReactiveFormsModule],
})
export class ReactiveModule {}
