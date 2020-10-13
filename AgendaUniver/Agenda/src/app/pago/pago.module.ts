import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagoListarComponent } from './pago-listar/pago-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PagoListarComponent],
  exports: [PagoListarComponent]
})
export class PagoModule { }
