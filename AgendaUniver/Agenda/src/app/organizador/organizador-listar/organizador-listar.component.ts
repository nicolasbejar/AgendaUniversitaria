import { Component, OnInit } from '@angular/core';
import { Organizador } from '../organizador';
import { OrganizadorService } from '../organizador.service';
import { OrganizadorDetail } from '../organizadorDetail';



@Component({
  selector: 'app-organizador-listar',
  templateUrl: './organizador-listar.component.html',
  styleUrls: ['./organizador-listar.component.css']
})
export class OrganizadorListarComponent implements OnInit {

  organizadores: Array<OrganizadorDetail>;
  selectedOrganizador: Organizador;
  selected = false;

  constructor(private organizadorService: OrganizadorService) { }

  ngOnInit() {
    this.getOrganizadores();
  }

  getOrganizadores(): void {
    this.organizadorService.getOrganizadores()
      .subscribe(organizadores => {this.organizadores = organizadores;
      });
  }
  onSelected(o: Organizador): void {
    this.selected = true;
    this.selectedOrganizador = o;
  }

}
