import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardProducto } from '../../shared/card-producto/card-producto';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, CardProducto],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  productos = [
    { nombre: 'Notebook Gamer', precio: 18500, enOferta: true },
    { nombre: 'Mouse Inalámbrico', precio: 650, enOferta: false },
    { nombre: 'Teclado Mecánico', precio: 1350, enOferta: true },
    { nombre: 'Monitor 24"', precio: 4200, enOferta: false },
  ];
}
