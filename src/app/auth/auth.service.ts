import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

@Injectable({
  providedIn: 'root', // Asegura que el servicio esté disponible en toda la aplicación
})
export class AuthService {
  private apiURL = 'http://localhost:8080/api/v1/usuarios'; // URL de la API

  constructor(private http: HttpClient) {} // Inyecta HttpClient

  // Método para registrar un nuevo usuario
  registrar(usuario: any): Observable<any> {
    return this.http.post(`${this.apiURL}/registro`, usuario);
  }

  // Método para iniciar sesión
  login(credenciales: any): Observable<any> {
    return this.http.post(`${this.apiURL}/login`, credenciales).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token); // Guarda el token en el localStorage
        }
      })
    );
  }

  
  obtenerToken(): string | null {
    return localStorage.getItem('token');
  }

  
  cerrarSesion(): void {
    localStorage.removeItem('token'); // Elimina el token del localStorage
    window.location.href = '/login'; // Redirige al login
  }


  obtenerPerfil(): Observable<Usuario> {
    const token = this.obtenerToken();
    if (!token) {
      throw new Error('No hay token disponible'); 
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`, // Añade el token al encabezado de la solicitud
    });

    return this.http.get<Usuario>(`${this.apiURL}/me`, { headers }); // Obtiene el perfil del usuario
  }
}