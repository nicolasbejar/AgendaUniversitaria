import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TicketDetail } from './ticketDetail';


@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = environment.baseUrl + 'tickets';


constructor(private http: HttpClient) { }

getTickets(): Observable<Array<TicketDetail>> {
  return this.http.get<Array<TicketDetail>>(this.apiUrl);

}

}
