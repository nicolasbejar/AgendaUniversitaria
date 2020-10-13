import { Component, OnInit } from '@angular/core';
import { Pago } from '../pago';
import { PagoService } from '../pago.service';

@Component({
  selector: 'app-pago-listar',
  templateUrl: './pago-listar.component.html',
  styleUrls: ['./pago-listar.component.css']
})
export class PagoListarComponent implements OnInit {

  constructor(private pagoService: PagoService) { }

  pagos: Array<Pago>;

  getPagos(): void {
    this.pagoService.getPagos()
      .subscribe(pagos => {
        this.pagos = pagos;
      });
  }
  ngOnInit() {
    this.getPagos( );
  }

}
