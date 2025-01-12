import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  Title: string;
  Year: string;
  Genre: string;
  Director: string;
  Actors: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
}

export interface CartItem {
  movie: Movie;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class WebService {
  private apiKey = '2910777b';
  private baseUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  
  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?apikey=${this.apiKey}&s=${query}`);
  }

 
  getMovieDetails(imdbID: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}?apikey=${this.apiKey}&i=${imdbID}`);
  }

  private cart: CartItem[] = [];

  addToCart(movie: Movie, price: number): void {
    this.cart.push({ movie, price });
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  calculateTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
