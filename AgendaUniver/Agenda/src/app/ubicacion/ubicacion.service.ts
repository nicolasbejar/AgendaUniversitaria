import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Ubicacion } from './ubicacion';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
private apiUrl = environment.baseUrl + 'ubicaciones';
constructor(private http: HttpClient) { }
getUbicaciones(): Observable<Ubicacion[]> {
  return this.http.get<Ubicacion[]>(this.apiUrl);
}
}
