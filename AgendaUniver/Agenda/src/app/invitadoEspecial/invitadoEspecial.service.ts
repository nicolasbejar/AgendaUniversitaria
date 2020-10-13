import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InvitadoEspecial } from './invitadoEspecial';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvitadoEspecialService {
  private apiUrl = environment.baseUrl + 'invitados especiales'; 
  constructor(private http: HttpClient) { }
  getInvitadosEspeciales(): Observable<InvitadoEspecial[]>{
    return this.http.get<InvitadoEspecial[]>(this.apiUrl);
  }
}

