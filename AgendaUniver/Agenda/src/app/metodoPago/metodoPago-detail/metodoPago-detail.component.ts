import { Component, OnInit, Input } from '@angular/core';
import { MetodoPago } from '../metodoPago';

@Component({
  selector: 'app-metodoPago-detail',
  templateUrl: './metodoPago-detail.component.html',
  styleUrls: ['./metodoPago-detail.component.css']
})
export class MetodoPagoDetailComponent implements OnInit {

  @Input() metodoPagoDetail: MetodoPago;

  constructor() { }

  ngOnInit() {
    console.log(this.metodoPagoDetail.id);
  }

}
