import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaListarComponent } from './tarjeta-listar/tarjeta-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TarjetaListarComponent],
  exports:[TarjetaListarComponent]
})
export class TarjetaModule { }
