import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actividad } from './actividad';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {
  private apiUrl = environment.baseUrl + 'actividades'; 
  constructor(private http: HttpClient) { }
  getActividades(): Observable<Actividad[]>{
    return this.http.get<Actividad[]>(this.apiUrl);
  }
}

