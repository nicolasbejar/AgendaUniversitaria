import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../tarjeta';
import { TarjetaService } from '../tarjeta.service';


@Component({
  selector: 'app-tarjeta-listar',
  templateUrl: './tarjeta-listar.component.html',
  styleUrls: ['./tarjeta-listar.component.css']
})
export class TarjetaListarComponent implements OnInit {

  constructor(private tarjetaService: TarjetaService) { }

  private tarjetas: Array<Tarjeta>;

  ngOnInit() {
    this.getTarjetas();
  }

  getTarjetas(): void{
    this.tarjetaService.getTarjetas()
      .subscribe(tarjetas => {
      this.tarjetas = tarjetas;
    });
  }
}