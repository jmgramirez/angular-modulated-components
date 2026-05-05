import { NgModule } from "@angular/core";
import { Tareas } from "./tareas";
import { Tarea } from "./tarea/tarea";
import { TareaNueva } from "./tarea-nueva/tarea-nueva";
import { CompartidaModule } from "../compartida/compartida.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [Tareas, Tarea, TareaNueva],
  imports: [CompartidaModule, CommonModule, FormsModule],
  exports: [Tareas]
})
export class TareasModule {}