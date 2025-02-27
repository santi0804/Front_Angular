import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { TarjetasComponent } from './tarjetas/tarjetas/tarjetas.component';
import { CrearComponent } from './tarjetas/crear/crear.component';
import { routes } from './app.routes';
import { AppRoutingModule } from './app.routes'; // Importa el módulo de rutas // Importa las rutas

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TarjetasComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    FormsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent], // Componente principal que se carga al iniciar la aplicación
})
export class AppModule {}