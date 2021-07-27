import { Component, Input, OnInit } from '@angular/core';
import {Tarea} from '../types/Tarea';
@Component({
  selector: 'app-tareas-editor',
  templateUrl: './tareas-editor.component.html',
  styleUrls: ['./tareas-editor.component.scss']
})
export class TareasEditorComponent implements OnInit {

  @Input() tarea?: Tarea;

  constructor() { }

  ngOnInit(): void {
  }

  get texto()
  {
    return this.tarea? this.tarea?.texto: '';
  }
  set texto(valor)
  {
      if(!this.tarea){
        this.tarea={} as Tarea;
      }
      this.tarea.texto = valor;
  }

  get descripcion()
  {
    return this.tarea ? this.tarea?.descripcion: '';
  }
  set descripcion(valor)
  {
      if(!this.tarea){
        this.tarea={} as Tarea;
      }
      this.tarea.descripcion = valor;
  }

  get estado()
  {
    return this.tarea ? this.tarea?.estado: '';
  }
  set estado(valor)
  {
      if(!this.tarea){
        this.tarea={} as Tarea;
      }
      this.tarea.estado = valor as 'pendiente' | 'ejecucion' | 'finalizada';
  }

}
