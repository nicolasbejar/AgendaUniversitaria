import { Component, OnInit } from '@angular/core';
import { Patrocinador } from '../patrocinador';
import { PatrocinadorService } from '../patrocinador.service';

@Component({
  selector: 'app-patrocinador-listar',
  templateUrl: './patrocinador-listar.component.html',
  styleUrls: ['./patrocinador-listar.component.css']
})
export class PatrocinadorListarComponent implements OnInit {
  private patrocinadores: Array<Patrocinador>;

  constructor(private patrocinadorService: PatrocinadorService) { }

  ngOnInit() {
    this.getPatrocinadores();
  }

  getPatrocinadores(): void{
    this.patrocinadorService.getPatrocinadores()
      .subscribe(patrocinadores => {
      this.patrocinadores = patrocinadores;
    });
  }
}
