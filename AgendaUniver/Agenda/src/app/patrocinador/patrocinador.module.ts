import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatrocinadorListarComponent } from './patrocinador-listar/patrocinador-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PatrocinadorListarComponent],
  exports:[PatrocinadorListarComponent]
})
export class PatrocinadorModule {}
