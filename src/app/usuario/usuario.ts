import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUsuario } from './usuario.model';

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  @Input() usuarioElegido!: IUsuario;
  @Input({required: true}) isSeleccionado!: boolean;
  @Output() seleccion = new EventEmitter<string>();


  get rutaImagen(): string {
    return 'usuarios/' + this.usuarioElegido.avatar;
  }

  get usuarioSeleccionado(): IUsuario {
    return this.usuarioElegido;
  }

  seleccionarUsuario(): void {
    this.seleccion.emit(this.usuarioElegido.id);
  }
}
 