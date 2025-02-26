import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarjeta } from './tarjeta.model';

@Injectable({
  providedIn: 'root', 
})
export class TarjetaService {
  private apiURL = 'http://localhost:8080/api/v1/tarjetas'; 

  constructor(private http: HttpClient) {} 

  
  obtenerTarjetas(): Observable<Tarjeta[]> {
    return this.http.get<Tarjeta[]>(this.apiURL);
  }

  
  obtenerTarjeta(id: number): Observable<Tarjeta> {
    return this.http.get<Tarjeta>(`${this.apiURL}/${id}`);
  }

  
  crearTarjeta(tarjeta: Tarjeta): Observable<Tarjeta> {
    return this.http.post<Tarjeta>(this.apiURL, tarjeta);
  }

  
  actualizarTarjeta(id: number, tarjeta: Tarjeta): Observable<Tarjeta> {
    return this.http.put<Tarjeta>(`${this.apiURL}/${id}`, tarjeta);
  }

  
  eliminarTarjeta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}