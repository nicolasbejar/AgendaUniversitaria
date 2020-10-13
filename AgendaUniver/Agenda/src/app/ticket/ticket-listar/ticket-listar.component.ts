import { Component, OnInit } from '@angular/core';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { TicketDetail } from '../ticketDetail';

@Component({
  selector: 'app-ticket-listar',
  templateUrl: './ticket-listar.component.html',
  styleUrls: ['./ticket-listar.component.css']
})
export class TicketListarComponent implements OnInit {

  tickets: Array<TicketDetail>;
  selectedTicket: Ticket;
  selected = false;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.getTickets();
  }
 
  getTickets(): void {
    this.ticketService.getTickets()
      .subscribe(tickets => {this.tickets = tickets;
    
  });
  }
  onSelected(t: Ticket): void {
    this.selected = true;
    this.selectedTicket = t;
  }
}
