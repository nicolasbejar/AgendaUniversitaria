import { Component, OnInit, Input } from '@angular/core';
import { OrganizadorDetail } from '../organizadorDetail';


@Component({
  selector: 'app-organizador-detail',
  templateUrl: './organizador-detail.component.html',
  styleUrls: ['./organizador-detail.component.css']
})
export class OrganizadorDetailComponent implements OnInit {


  @Input() organizadorDetail: OrganizadorDetail;

  constructor() { }

  ngOnInit() {
  }

}
