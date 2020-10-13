import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventoListarComponent } from './evento-listar/evento-listar.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EventoListarComponent],
  exports: [EventoListarComponent]
})
export class EventoModule { }
