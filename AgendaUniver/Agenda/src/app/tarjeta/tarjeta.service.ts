import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarjeta } from './tarjeta';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private apiUrl = environment.baseUrl + 'tarjetas'; 
  constructor(private http: HttpClient) { }
  getTarjetas(): Observable<Tarjeta[]>{
    return this.http.get<Tarjeta[]>(this.apiUrl);
  }
}
