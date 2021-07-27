import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { ControlesModule } from '../controles/controles.module';
import { TareasEditorComponent } from './tareas-editor/tareas-editor.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioComponent,
    TareasEditorComponent
  ],
  imports: [
    CommonModule,
    ControlesModule,
    FormsModule
  ],
  exports: [
    InicioComponent
  ]
})
export class ProgramacionModule { }
