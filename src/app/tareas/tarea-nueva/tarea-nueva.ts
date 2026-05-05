import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITarea } from '../tarea.model';

@Component({
  selector: 'app-tarea-nueva',
  standalone: false,
  templateUrl: './tarea-nueva.html',
  styleUrl: './tarea-nueva.css',
})
export class TareaNueva {
  @Output() isCancelar = new EventEmitter<boolean>();
  @Output() tareaCreada = new EventEmitter<ITarea>();
  @Input({required: true}) usuarioId!: string;
  nuevaTarea: ITarea ={
    id: '',
    titulo: '',
    descripcion: '',
    fecha: '',
    usuarioId: ''
  };

  cancelar(): void {
    this.isCancelar.emit(false);
  }

  crearTarea(): void {
    if(this.usuarioId != '') {  
      this.nuevaTarea.id = Math.random().toString(36).substring(2, 9);
      this.nuevaTarea.usuarioId = this.usuarioId;
      this.tareaCreada.emit(this.nuevaTarea);
      console.log('Tarea creada:', this.nuevaTarea);
    }

    this.limpiarFormulario();
    this.cancelar();
  }

  limpiarFormulario(): void {
    this.nuevaTarea = {
      id: '',
      titulo: '',
      descripcion: '',
      fecha: '',
      usuarioId: ''
    };
  }
}
