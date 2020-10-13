import { Component, OnInit, Input } from '@angular/core';
import { Ubicacion } from '../ubicacion';

@Component({
  selector: 'app-ubicacion-detail',
  templateUrl: './ubicacion-detail.component.html',
  styleUrls: ['./ubicacion-detail.component.css']
})
export class UbicacionDetailComponent implements OnInit {

  @Input() ubicacionDetail: Ubicacion;

  constructor() { }

  ngOnInit() {
    console.log(this.ubicacionDetail.id);
  }

}
