import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContenidoMultimedia } from './contenidoMultimedia';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContenidoMultimediaService {
  private apiUrl = environment.baseUrl + 'multimedias';
  constructor(private http: HttpClient) { }
  getMultimedias(): Observable<ContenidoMultimedia[]> {
    return this.http.get<ContenidoMultimedia[]>(this.apiUrl);
  }

}
