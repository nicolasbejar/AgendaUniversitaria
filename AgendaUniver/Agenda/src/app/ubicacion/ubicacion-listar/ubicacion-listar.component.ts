import { Component, OnInit } from '@angular/core';
import { Ubicacion } from '../ubicacion';
import { UbicacionService } from '../ubicacion.service';


@Component({
  selector: 'app-ubicacion-listar',
  templateUrl: './ubicacion-listar.component.html',
  styleUrls: ['./ubicacion-listar.component.css']
})
export class UbicacionListarComponent implements OnInit {
  private ubicaciones: Array<Ubicacion>;
  selectedUbicacion: Ubicacion;
  selected = false;
  constructor(private ubicacionService: UbicacionService) { }
  getUbicaciones(): void {
    this.ubicacionService.getUbicaciones()
      .subscribe(ubicaciones => {
        this.ubicaciones = ubicaciones;
      });
  }

  onSelected(b: Ubicacion): void {
    this.selected = true;
    this.selectedUbicacion = b;
  }

  ngOnInit() {
    this.getUbicaciones();
  }

}
