import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './login.component.html',
})
export class LoginComponent {
  credenciales = { email: '', password: '' }; 

  constructor(
    private authService: AuthService, 
    private router: Router 
  ) {}

  // Método para manejar el login
  login() {
    this.authService.login(this.credenciales).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token); 
        alert('Login exitoso');
        this.router.navigate(['/tarjetas']); 
      },
      error: (err) => {
        alert('Error en el login'); 
        console.error(err); 
      },
    });
  }
}