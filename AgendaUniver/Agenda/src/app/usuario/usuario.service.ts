import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = environment.baseUrl + 'usuarios';
constructor(private http: HttpClient) { }
getUsuarios(): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(this.apiUrl);
}
}
