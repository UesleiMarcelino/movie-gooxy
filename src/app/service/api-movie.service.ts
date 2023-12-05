import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewMovieModel } from '../model/newMovie-model';
import { UpcomingMovieModel } from '../model/upcomingMovie-model';
import { DetailsMovieModel } from '../model/detailsMovie-model';

@Injectable({
  providedIn: 'root'
})
export class ApiMovieService {
  private urlNewMovie: string = 'https://www.omdbapi.com/?apikey=59f54c63&y=2023&type=movie'
  private urlUpcomingMovie: string = 'https://www.omdbapi.com/?apikey=59f54c63&y=2024&type=movie'
  private urlDetailsMovie: string = 'https://www.omdbapi.com/?apikey=59f54c63'

  constructor(private http: HttpClient) {
  }

  getNewMovies(): Observable<NewMovieModel[]>{
    return this.http.get<NewMovieModel[]>(`${this.urlNewMovie}&s=movie`);
  }

  getUpcomingMovies(): Observable<UpcomingMovieModel[]>{
    return this.http.get<UpcomingMovieModel[]>(`${this.urlUpcomingMovie}&s=movie`);
  }

  getDetailsMovies(imdbID: string): Observable<DetailsMovieModel[]>{
    return this.http.get<DetailsMovieModel[]>(`${this.urlDetailsMovie}&i=${imdbID}`);
  }

  getSearchNewMovies(nameMovie: string): Observable<any>{
    return this.http.get<any>(`${this.urlNewMovie}&s=${nameMovie}`);
  }
  getSearchUpcomingMovies(nameMovie: string): Observable<any>{
    return this.http.get<any>(`${this.urlUpcomingMovie}&s=${nameMovie}`);
  }
}
