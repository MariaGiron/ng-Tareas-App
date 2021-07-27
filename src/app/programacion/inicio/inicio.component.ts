import { Component, OnInit } from '@angular/core';
import {Tarea} from '../types/Tarea';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  tareas: Array<Tarea>=[
    {
      id:1,
      texto:'Revisar Correo',
      descripcion: '',
      estado: 'pendiente'
    },
    {
      id:2,
      texto:'Revisar Agenda',
      descripcion: '',
      estado: 'finalizada'
    },
    {
      id:3,
      texto:'Oficios diarias',
      descripcion: '',
      estado: 'ejecucion'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

  Onclick(){
    const idsArray =  this.tareas.map(element => element.id);
    const newId = Math.max(...idsArray) + 1;
    console.log('Nuevo id ', newId);
    
    this.tareas.push({
      id: newId,
      texto: '<Nueva actividad>',
      descripcion: '',
      estado:'pendiente'
    })

  }

  seleccionarTarea?: Tarea;
  setSeleccionarTarea(tarea: Tarea){
    console.log('selecciono: ', tarea);
    this.seleccionarTarea = tarea;
  }

}
