import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pago } from './pago';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private apiUrl = environment.baseUrl + 'pagos';
  constructor(private http: HttpClient) { }
  getPagos(): Observable<Pago[]> {
  return this.http.get<Pago[]>(this.apiUrl);
  }
}
 