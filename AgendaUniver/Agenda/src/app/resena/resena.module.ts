import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResenaListarComponent } from './resena-listar/resena-listar.component';
import { ResenaDetailComponent } from './resena-detail/resena-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResenaListarComponent, ResenaDetailComponent],
  exports: [ResenaListarComponent]
})
export class ResenaModule {}
