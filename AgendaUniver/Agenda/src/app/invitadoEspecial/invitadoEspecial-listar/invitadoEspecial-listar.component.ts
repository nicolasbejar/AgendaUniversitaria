import { Component, OnInit } from '@angular/core';
import { InvitadoEspecial } from '../invitadoEspecial';
import { InvitadoEspecialService } from '../invitadoEspecial.service';

@Component({
  selector: 'app-invitadoEspecial-listar',
  templateUrl: './invitadoEspecial-listar.component.html',
  styleUrls: ['./invitadoEspecial-listar.component.css']
})
export class InvitadoEspecialListarComponent implements OnInit {
  constructor(private invitadoEspecialService: InvitadoEspecialService) { }

  private invitados: Array<InvitadoEspecial>;

  ngOnInit() {
    this.getInvitadosEspeciales();
  }

  getInvitadosEspeciales(): void {
    this.invitadoEspecialService.getInvitadosEspeciales()
      .subscribe(invitadosEspeciales => {
      this.invitados = invitadosEspeciales;
      });
  }

}

