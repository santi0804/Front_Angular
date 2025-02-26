import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ListarComponent } from './tarjetas/listar/listar.component';
import { CrearComponent } from './tarjetas/crear/crear.component';
import { AuthGuard } from './auth/auth.guard';
import { TarjetasComponent } from './tarjetas/tarjetas/tarjetas.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'tarjetas', component: ListarComponent, canActivate: [AuthGuard] }, // Targeta protegida.
    { path: 'tarjetas', component: TarjetasComponent, canActivate: [AuthGuard] }, 
    { path: 'tarjetas/crear', component: CrearComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutinModule {};