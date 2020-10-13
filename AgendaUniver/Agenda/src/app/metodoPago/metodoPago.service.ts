import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MetodoPago } from './metodoPago';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MetodoPagoService {
  private apiUrl = environment.baseUrl + 'metodosPago';
  constructor(private http: HttpClient) { }
  getMetodosPago(): Observable<MetodoPago[]> {
    return this.http.get<MetodoPago[]>(this.apiUrl);
  }
}
