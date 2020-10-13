import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResenaDetail } from './resenaDetail';

@Injectable({
  providedIn: 'root'
}) 
export class ResenaService {
  private apiUrl = environment.baseUrl + 'resenas';
  constructor(private http: HttpClient) { }
  getResenas(): Observable<ResenaDetail[]> {
    return this.http.get<ResenaDetail[]>(this.apiUrl);
  }
}
