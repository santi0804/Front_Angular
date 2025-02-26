import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent {
  usuario: Usuario = { nombre: '', email: '', password: '' };

  constructor(private authService: AuthService) {}

  registrar() {
    this.authService.registrar(this.usuario).subscribe(() => {
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
    });
  }
}
