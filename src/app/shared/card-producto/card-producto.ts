import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-producto',
  imports: [CommonModule],
  templateUrl: './card-producto.html',
  styleUrl: './card-producto.scss',
})
export class CardProducto {
  @Input() producto!: { nombre: string; precio: number; enOferta: boolean };
}
