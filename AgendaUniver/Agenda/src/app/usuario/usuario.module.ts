import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListarComponent } from './usuario-listar/usuario-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UsuarioListarComponent],
  exports: [UsuarioListarComponent]
})
export class UsuarioModule { }
