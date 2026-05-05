import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITarea } from './tarea.model';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-tareas',
  standalone: false,
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {

  // Inyectar service TareasService
  constructor(private tareasService: TareasService) {}

  @Input() usuario: any = null;
  @Input({required: true}) idUsuario!: string;
  isHabilitadoFolmulario: boolean = false;


  //documentar metodo
  // Este metodo devuelve un array de tareas filtradas por el id del usuario
  get tareasFiltradas() {
    return this.tareasService.obtenerTareasByUsuario(this.idUsuario);
  }

  //documentar codigo
  // Este metodo se llama cuando una tarea es finalizada
  onTareaFinalizada(idTarea: string): void {
    console.log('Tarea finalizada en tareas component: ' + idTarea);
    this.tareasService.eliminarTarea(idTarea);
  }

  agregarTarea(): void {
    this.isHabilitadoFolmulario = true;
  }

  onCancelarTarea(isCancelada: boolean): void {
    this.isHabilitadoFolmulario = isCancelada;
  }

  onCrearTarea(tareaCreada: ITarea): void {
    this.tareasService.agregarTarea(tareaCreada);
    this.isHabilitadoFolmulario = false;
  }

}
