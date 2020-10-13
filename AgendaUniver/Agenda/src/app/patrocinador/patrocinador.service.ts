import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patrocinador } from './patrocinador';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PatrocinadorService {
  private apiUrl = environment.baseUrl + 'patrocinadores'; 
  constructor(private http: HttpClient) { }
  getPatrocinadores(): Observable<Patrocinador[]>{
    return this.http.get<Patrocinador[]>(this.apiUrl);
  }
}