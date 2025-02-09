import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebService, Movie } from '../../services/web.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-projekcije',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatDividerModule, MatButtonModule, MatCardModule],
  templateUrl: './projekcije.component.html',
  styleUrls: ['./projekcije.component.css'],
})
export class ProjekcijeComponent {
  movies: Movie[] = [];
  searchQuery: string = '';
  defaultMovies: Movie[] = []; 

  constructor(private webService: WebService) {}

  ngOnInit(): void {
   
    this.defaultMovies = [
      {
        Title: 'Inception',
        Year: '2010',
        Genre: 'Sci-Fi, Thriller',
        Director: 'Christopher Nolan',
        Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt',
        Plot: 'A mind-bending thriller.',
        Poster: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FInception_%2528soundtrack%2529&psig=AOvVaw3gxVWPfBzPWfHnclVlI2KX&ust=1736771048795000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMiI172W8IoDFQAAAAAdAAAAABAZ',
        imdbRating: '8.8',
      },
      {
        Title: 'Interstellar',
        Year: '2014',
        Genre: 'Sci-Fi, Drama',
        Director: 'Christopher Nolan',
        Actors: 'Matthew McConaughey, Anne Hathaway',
        Plot: 'A journey beyond the stars.',
        Poster: 'https://www.imdb.com/title/tt0816692/mediaviewer/rm4043724800/?ref_=tt_ov_i',
        imdbRating: '8.6',
      },
    ];
  }

  searchMovies(): void {
    if (this.searchQuery) {
      this.webService.searchMovies(this.searchQuery).subscribe((response: any) => {
        const basicMovies = response.Search || [];
        this.movies = [];

       
        basicMovies.forEach((basicMovie: any) => {
          this.webService.getMovieDetails(basicMovie.imdbID).subscribe((details: Movie) => {
            this.movies.push(details);
          });
        });
      });
    }
  }

  addToCart(movie: any): void {
    const projection = {
      title: movie.Title,
      price: 500, 
    };
    this.webService.addToCart(projection);
    alert(`${movie.Title} je dodat u korpu.`);
  }
}

