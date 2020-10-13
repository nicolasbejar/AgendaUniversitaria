import { Component, OnInit } from '@angular/core';
import { MetodoPago } from '../metodoPago';
import { MetodoPagoService } from '../metodoPago.service';

@Component({
  selector: 'app-metodoPago-listar',
  templateUrl: './metodoPago-listar.component.html',
  styleUrls: ['./metodoPago-listar.component.css']
})
export class MetodoPagoListarComponent implements OnInit {

  metodosPago: Array<MetodoPago>;
  selectedMetodoPago: MetodoPago;
  selected = false;

  constructor(private metodoPagoService: MetodoPagoService) { }

  getMetodosPago(): void {
    this.metodoPagoService.getMetodosPago()
      .subscribe(metodosPago => {this.metodosPago = metodosPago;});
  }
  onSelected(m: MetodoPago): void {
    if(this.selected == false) {
      this.selected = true;
      this.selectedMetodoPago = m;
    }
    else {
      this.selected = false;
    }    
  }
  ngOnInit() {
    this.getMetodosPago();
  }

}
