import { Component, OnInit, Input } from '@angular/core';
import { TicketDetail } from '../ticketDetail';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {


  @Input() ticketDetail: TicketDetail;

  constructor() { }

  ngOnInit() {

  }
}
