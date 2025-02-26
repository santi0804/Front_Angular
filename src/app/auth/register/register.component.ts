import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  usuario = { nombre: '', email: '', password: '' };

  constructor(private authService: AuthService) {}

  registrar() {
    this.authService.registrar(this.usuario).subscribe({
      next: (res) => alert('Registro exitoso'),
      error: (err) => alert('Error en el registro'),
    });
  }
}
