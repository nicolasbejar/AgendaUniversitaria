import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitadoEspecialListarComponent } from './invitadoEspecial-listar/invitadoEspecial-listar.component';
import { InvitadoEspecialDetailComponent } from './invitadoEspecial-detail/invitadoEspecial-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InvitadoEspecialListarComponent, InvitadoEspecialDetailComponent],
  exports: [InvitadoEspecialListarComponent]
})
export class InvitadoEspecialModule { }
