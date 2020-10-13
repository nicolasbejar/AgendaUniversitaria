import { Component, OnInit } from '@angular/core';
import { Actividad } from '../actividad';
import { ActividadService } from '../actividad.service';

@Component({
  selector: 'app-actividad-listar',
  templateUrl: './actividad-listar.component.html',
  styleUrls: ['./actividad-listar.component.css']
})
export class ActividadListarComponent implements OnInit {
  constructor(private actividadService: ActividadService) { }

  private actividades: Array<Actividad>;

  ngOnInit() {
    this.getActividades();
  }

  getActividades(): void{
    this.actividadService.getActividades()
      .subscribe(actividades => {
      this.actividades = actividades;
    });
  }
}

