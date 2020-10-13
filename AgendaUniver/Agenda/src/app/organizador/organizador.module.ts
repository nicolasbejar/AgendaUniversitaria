import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizadorListarComponent } from './organizador-listar/organizador-listar.component';
import { OrganizadorDetailComponent } from './organizador-detail/organizador-detail.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [OrganizadorListarComponent,OrganizadorDetailComponent],
  exports: [OrganizadorListarComponent],
})
export class OrganizadorModule { }
