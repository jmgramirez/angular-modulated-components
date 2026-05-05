import { Injectable } from '@angular/core';
import { ITarea } from './tarea.model';

@Injectable({
  providedIn: 'root',
})
export class TareasService {

  private tareas: ITarea[] = [
    {
      id: 't1',
      titulo: 'Tarea de ejemplo',
      descripcion: 'Esta es una tarea de ejemplo para mostrar cómo se ve una tarea en la aplicación.',
      fecha: '2026-05-20',
      usuarioId: 'u1'
    },
    {
      id: 't2',
      titulo: 'Otra tarea',
      descripcion: 'Esta es otra tarea de ejemplo para mostrar cómo se ve una tarea en la aplicación.',
      fecha: '2026-05-21',
      usuarioId: 'u2'
    },
    {
      id: 't3',
      titulo: 'Tercera tarea',
      descripcion: 'Esta es la tercera tarea de ejemplo para mostrar cómo se ve una tarea en la aplicación.',
      fecha: '2026-05-22',
      usuarioId: 'u2'
    }

  ];

  constructor() {
    //Guardar tareas en localStorage
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      this.tareas = JSON.parse(tareasGuardadas);
    }
  }

  agregarTarea(tarea: ITarea): void {
    this.tareas.push(tarea);
    //Guardar tareas en localStorage
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  eliminarTarea(idTarea: string): void {
    this.tareas = this.tareas.filter(tarea => tarea.id !== idTarea);
    //Guardar tareas en localStorage
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  obtenerTareasByUsuario(idUsuario: string): ITarea[] {
    return this.tareas.filter(tarea => tarea.usuarioId === idUsuario);
  }

}
