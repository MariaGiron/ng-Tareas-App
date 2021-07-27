import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

const EstadoBulletColor = {
  pendiente: 'lightcoral',
  ejecucion: 'lightblue',
  finalizada: 'lightgreen',
}

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.scss']
})
export class BulletComponent implements OnInit {

  @Input() displayText= '';
  @Input() Estado: keyof typeof EstadoBulletColor = 'pendiente';
  @Output() onClick = new EventEmitter<void>();

  internalClick(){
    this.onClick.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

  getBorder(){
    return `4px solid ${EstadoBulletColor[this.Estado]}` 
  }

}
