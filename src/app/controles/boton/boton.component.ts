import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {

  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  internalClick(){
    console.log('hola anita');
    this.onClick.emit();
  }

}
