import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AuthService } from '../auth.service'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  imports: [FormsModule], 
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css'], 
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
        localStorage.setItem('token', res.token); // Guarda el token en el localStorage
        alert('Login exitoso');
        this.router.navigate(['/tarjetas']); // Redirige a la ruta de tarjetas
      },
      error: (err) => {
        alert('Error en el login'); // Muestra un mensaje de error
        console.error(err); // Imprime el error en la consola
      },
    });
  }
}