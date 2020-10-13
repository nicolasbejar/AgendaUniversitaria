import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetodoPagoListarComponent } from './metodoPago-listar/metodoPago-listar.component';
import {  MetodoPagoDetailComponent } from './metodoPago-detail/metodoPago-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MetodoPagoListarComponent, MetodoPagoDetailComponent],
  exports: [MetodoPagoListarComponent]
})
export class MetodoPagoModule { }
