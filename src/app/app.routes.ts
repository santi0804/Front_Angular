import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListarComponent } from './tarjetas/listar/listar.component';
import { CrearComponent } from './tarjetas/crear/crear.component';
import { AuthGuard } from './auth/auth.guard';
import { TarjetasComponent } from './tarjetas/tarjetas/tarjetas.component';


// Configuración de rutas
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'tarjetas', component: ListarComponent, canActivate: [AuthGuard] }, // Ruta protegida
    { path: 'tarjetas/crear', component: CrearComponent, canActivate: [AuthGuard] }, // Ruta protegida
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Ruta por defecto
    { path: '**', redirectTo: '/login' }, // Ruta comodín (para rutas no encontradas)
  ];
  
  // Módulo de rutas
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}