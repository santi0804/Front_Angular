import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {
  credenciales = { email: '', password: '' };

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.credenciales).subscribe({next: (res) => {
        localStorage.setItem('token', res.token);
        alert('Login exitoso');
      },
      error: (err) => alert('Error en el login'),
    });
  }
}
