import { LOCALE_ID, NgModule } from '@angular/core';
import { App } from './app';
import { BrowserModule } from '@angular/platform-browser';

import { EncabezadoComponent } from './encabezado/encabezado.component';
import { Usuario } from './usuario/usuario';
import { CompartidaModule } from './compartida/compartida.module';
import { TareasModule } from './tareas/tareas.module';

@NgModule({
  declarations: [
    App,
    EncabezadoComponent,
    Usuario,
    // Declare your components, directives, and pipes here
  ],
  imports: [
    BrowserModule,
    CompartidaModule,
    TareasModule
    // Import your modules here
  ],
  providers: [
      { provide: LOCALE_ID, useValue: 'es'}
],
  bootstrap: [App],
})
export class AppModule {}
