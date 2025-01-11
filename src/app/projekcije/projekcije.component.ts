import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebService, Movie } from '../../services/web.service';

@Component({
  selector: 'app-projekcije',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projekcije.component.html',
  styleUrls: ['./projekcije.component.css'],
})
export class ProjekcijeComponent {
  movies: Movie[] = [];
  searchQuery: string = '';
  defaultMovies: Movie[] = []; // Filmovi koji se prikazuju inicijalno

  constructor(private webService: WebService) {}

  ngOnInit(): void {
    // Inicijalno postavljanje nekoliko filmova
    this.defaultMovies = [
      {
        Title: 'Inception',
        Year: '2010',
        Genre: 'Sci-Fi, Thriller',
        Director: 'Christopher Nolan',
        Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt',
        Plot: 'A mind-bending thriller.',
        Poster: 'https://m.media-amazon.com/images/I/51A6ZQ2H4HL._AC_.jpg',
        imdbRating: '8.8',
      },
      {
        Title: 'Interstellar',
        Year: '2014',
        Genre: 'Sci-Fi, Drama',
        Director: 'Christopher Nolan',
        Actors: 'Matthew McConaughey, Anne Hathaway',
        Plot: 'A journey beyond the stars.',
        Poster: 'https://m.media-amazon.com/images/I/81g2b4YskKL._AC_SY679_.jpg',
        imdbRating: '8.6',
      },
    ];
  }

  searchMovies(): void {
    if (this.searchQuery) {
      this.webService.searchMovies(this.searchQuery).subscribe((response: any) => {
        const basicMovies = response.Search || [];
        this.movies = [];

        // Povlačimo detalje za svaki film iz rezultata pretrage
        basicMovies.forEach((basicMovie: any) => {
          this.webService.getMovieDetails(basicMovie.imdbID).subscribe((details: Movie) => {
            this.movies.push(details);
          });
        });
      });
    }
  }

  reserveMovie(movie: Movie): void {
    this.webService.addToCart(movie, 500);
    alert(`${movie.Title} je rezervisan i dodat u korpu.`);
    // Dodajte logiku za dodavanje u korpu
  }
}

