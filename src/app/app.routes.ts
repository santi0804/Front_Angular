import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListarComponent } from './tarjetas/listar/listar.component';
import { CrearComponent } from './tarjetas/crear/crear.component';
import { AuthGuard } from './auth/auth.guard';

// Configuración de rutas
export const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Ruta para el login
  { path: 'register', component: RegisterComponent }, // Ruta para el registro
  { path: 'tarjetas', component: ListarComponent, canActivate: [AuthGuard] }, // Ruta protegida para listar tarjetas
  { path: 'tarjetas/crear', component: CrearComponent, canActivate: [AuthGuard] }, // Ruta protegida para crear tarjetas
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }, 
];

// Módulo de rutas
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configura las rutas principales
  exports: [RouterModule], // Exporta RouterModule para que esté disponible en otros módulos
})
export class AppRoutingModule {}