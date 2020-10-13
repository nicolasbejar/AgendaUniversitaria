import { Component, OnInit, Input } from '@angular/core';
import { InvitadoEspecial } from '../invitadoEspecial';

@Component({
  selector: 'app-invitadoEspecial-detail',
  templateUrl: './invitadoEspecial-detail.component.html',
  styleUrls: ['./invitadoEspecial-detail.component.css']
})
export class InvitadoEspecialDetailComponent implements OnInit {

  @Input() invitadoEspecialDetail: InvitadoEspecial;

  constructor() { }

  ngOnInit() {
    console.log(this.invitadoEspecialDetail.id);
  }

}
