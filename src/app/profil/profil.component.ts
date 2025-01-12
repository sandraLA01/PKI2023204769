import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule, MatButtonModule,
    CommonModule,
    FormsModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

  user = {
    firstName: 'Pera',
    lastName: 'Perić',
    email: 'pera.peric@example.com',
    phone: '060/123-4567',
    address: 'Beograd, Srbija',
    favoriteGenres: 'Akcija, Triler',
    username: 'pera123',
    password: 'password123'

  }

  isEditing = false;


  enableEdit(): void {
    this.isEditing = true;
  }


  saveProfile(): void {
    this.isEditing = false;
    alert('Profil je uspešno ažuriran!');
  }
}
