import { Component, OnInit } from '@angular/core';
import { WebService } from '../../services/web.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-korpa',
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule

  ],
  templateUrl: './korpa.component.html',
  styleUrl: './korpa.component.css'
})
export class KorpaComponent implements OnInit {
  cart: any[] = []; // Rezervacije
  totalPrice: number = 0; // Ukupna cena

  constructor(private webService: WebService) {}

  ngOnInit(): void {
    this.cart = this.webService.getCart();
    this.calculateTotal();
  }

  // Uklanjanje stavke iz korpe
  removeFromCart(index: number): void {
    this.webService.removeFromCart(index);
    this.calculateTotal();
  }

  // Izračunavanje ukupne cene
  calculateTotal(): void {
    this.totalPrice = this.webService.calculateTotal();
  }
}