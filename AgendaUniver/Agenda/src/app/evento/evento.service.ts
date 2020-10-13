import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from './evento';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiUrl = environment.baseUrl + 'eventos'; 
  constructor(private http: HttpClient) { }
  getEventos(): Observable<Evento[]>{
    return this.http.get<Evento[]>(this.apiUrl);
  }
}