import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { BotonComponent } from './boton/boton.component';
import { BulletComponent } from './bullet/bullet.component';



@NgModule({
  declarations: [
    PanelComponent,
    BotonComponent,
    BulletComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PanelComponent,
    BotonComponent,
    BulletComponent
  ]
})
export class ControlesModule { }
