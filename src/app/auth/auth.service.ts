import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface Usuario {
  // Define la estructura del objeto Usuario según tu API
  id: number;
  nombre: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = 'http://localhost:8080/api/v1/usuarios';

  constructor(private http: HttpClient) {}

  registrar(usuario: any): Observable<any> {
    return this.http.post(`${this.apiURL}/registro`, usuario);
  }

  login(credenciales: any): Observable<any> {
    return this.http.post(`${this.apiURL}/login`, credenciales).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }

  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }

  cerrarSesion(): void {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirige al login
  }

  obtenerPerfil(): Observable<Usuario> {
    const token = this.obtenerToken();
    if (!token) {
      throw new Error('No hay token disponible');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get<Usuario>(`${this.apiURL}/me`, { headers });
  }
}