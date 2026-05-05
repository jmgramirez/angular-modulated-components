import { Component } from '@angular/core';
import { USUARIOS_FALSOS } from './usuarios-falsos';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  usuarios: any = USUARIOS_FALSOS;
  userSelected!:any;
  
  usuarioSeleccionado(id: string): void {
    this.userSelected = this.usuarios.find((u: any) => u.id === id);

  }

}
