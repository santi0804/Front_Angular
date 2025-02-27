import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root', 
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // Método para determinar si la ruta puede ser activada
  canActivate(): boolean {
    if (this.authService.obtenerToken()) {
      return true; // Permite el acceso si hay un token
    }
    this.router.navigate(['/login']); // Redirige al login si no hay token
    return false; 
  }
}