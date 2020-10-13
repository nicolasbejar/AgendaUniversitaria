import { Component, OnInit, Input } from '@angular/core';
import { Actividad } from '../actividad';

@Component({
  selector: 'app-actividad-detail',
  templateUrl: './actividad-detail.component.html',
  styleUrls: ['./actividad-detail.component.css']
})
export class ActividadDetailComponent implements OnInit {

  @Input() actividadDetail: Actividad;

  constructor() { }

  ngOnInit() {
    console.log(this.actividadDetail.id);
  }

}
