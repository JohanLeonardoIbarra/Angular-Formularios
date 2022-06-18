import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DiamicosComponent } from './diamicos/diamicos.component';
import { SwitchComponent } from './switch/switch.component';


@NgModule({
  declarations: [
    BasicosComponent,
    DiamicosComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ]
})
export class ReactiveModule { }
