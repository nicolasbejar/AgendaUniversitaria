import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbicacionListarComponent } from './ubicacion-listar/ubicacion-listar.component';
import { UbicacionDetailComponent } from './ubicacion-detail/ubicacion-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UbicacionListarComponent, UbicacionDetailComponent],
  exports: [UbicacionListarComponent]
})
export class UbicacionModule { }
