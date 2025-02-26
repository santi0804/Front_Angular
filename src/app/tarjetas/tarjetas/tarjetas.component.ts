import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../tarjeta.service';
import { Tarjeta } from '../tarjeta.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-tarjetas',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './tarjetas.component.html',
})
export class TarjetasComponent implements OnInit {
  tarjetas: Tarjeta[] = []; // Lista de tarjetas

  nuevaTarjeta: Tarjeta = {
    codigo: '',
    monto: 0,
    fechaCreacion: '',
    fechaExpiracion: '',
  }; 

  constructor(private tarjetaService: TarjetaService) { }

  ngOnInit(): void {
    this.cargarTarjetas();
  }

  
  cargarTarjetas() {
    this.tarjetaService.obtenerTarjetas().subscribe((data) => {
      this.tarjetas = data;
    });
  }

  
  agregarTarjeta() {
    this.tarjetaService.crearTarjeta(this.nuevaTarjeta).subscribe(() => {
      this.cargarTarjetas(); 
      this.nuevaTarjeta = { codigo: '', monto: 0, fechaCreacion: '', fechaExpiracion: '' };
    });
  }

  
  eliminarTarjeta(id: number) {
    this.tarjetaService.eliminarTarjeta(id).subscribe(() => this.cargarTarjetas()); 
  }
}