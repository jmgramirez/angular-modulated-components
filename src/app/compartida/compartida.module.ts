import { NgModule } from "@angular/core";
import { Tarjeta } from "./tarjeta/tarjeta";

@NgModule({
  declarations: [
    Tarjeta
  ],
  exports: [
    Tarjeta
  ]
})
export class CompartidaModule {}