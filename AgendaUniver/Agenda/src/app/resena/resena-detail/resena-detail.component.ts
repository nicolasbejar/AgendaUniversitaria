import { Component, OnInit, Input } from '@angular/core';
import { Resena } from '../resena';

@Component({
  selector: 'app-resena-detail',
  templateUrl: './resena-detail.component.html',
  styleUrls: ['./resena-detail.component.css']
})
export class ResenaDetailComponent implements OnInit {

  @Input() resenaDetail: Resena;
  constructor() { }

  ngOnInit() {
    console.log(this.resenaDetail.id);
  }

}
