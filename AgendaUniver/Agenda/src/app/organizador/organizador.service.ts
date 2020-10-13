import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { OrganizadorDetail } from './organizadorDetail';


@Injectable({
  providedIn: 'root'
})
export class OrganizadorService {
  private apiUrl = environment.baseUrl + 'organizadores';

  constructor(private http: HttpClient) { }


  getOrganizadores(): Observable<Array<OrganizadorDetail>> {
    return this.http.get<Array<OrganizadorDetail>>(this.apiUrl);
  }
}
