import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITarea } from '../tarea.model';


@Component({
  selector: 'app-tarea',
  standalone: false,
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class Tarea {
  @Input() tarea!: ITarea;
  @Output() idTareaFinalizada = new EventEmitter<string>();

  finalizarTarea(id: string): void {
    console.log('Tarea finalizada: ' + id);
    this.idTareaFinalizada.emit(id);
  }
}
