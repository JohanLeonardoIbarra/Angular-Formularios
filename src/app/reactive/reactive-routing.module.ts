import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './basicos/basicos.component';
import { DiamicosComponent } from './diamicos/diamicos.component';
import { SwitchComponent } from './switch/switch.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "basicos",
        component: BasicosComponent
      },
      {
        path: "dinamicos",
        component: DiamicosComponent
      },
      {
        path: "switches",
        component: SwitchComponent
      },
      {
        path: "**",
        redirectTo: "basicos"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ReactiveRoutingModule { }
