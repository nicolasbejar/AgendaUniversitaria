import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContenidoMultimediaListarComponent } from './contenidoMultimedia-listar/contenidoMultimedia-listar.component';
import { ContenidoMultimediaDetailComponent } from './contenidoMultimedia-Detail/contenidoMultimedia-Detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContenidoMultimediaListarComponent, ContenidoMultimediaDetailComponent],
  exports: [ContenidoMultimediaListarComponent]
})
export class ContenidoMultimediaModule { }
