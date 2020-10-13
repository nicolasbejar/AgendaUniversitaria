import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadListarComponent } from './actividad-listar/actividad-listar.component';
import { ActividadDetailComponent } from './actividad-detail/actividad-detail.component';
import { Actividad } from './actividad';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActividadListarComponent, ActividadDetailComponent],
  exports: [ActividadListarComponent]
})
export class ActividadModule { }
