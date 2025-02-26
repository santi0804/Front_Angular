import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../tarjeta.service';
import { Tarjeta } from '../tarjeta.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-tarjetas',
  standalone: true, // Añade standalone si estás usando Angular 17+
  imports: [CommonModule, FormsModule], // Añade CommonModule y FormsModule aquí
  templateUrl: './tarjetas.component.html',
})
export class TarjetasComponent implements OnInit {
  tarjetas: Tarjeta[] = [];

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