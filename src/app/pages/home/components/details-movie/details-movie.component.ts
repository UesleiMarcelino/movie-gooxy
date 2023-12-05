import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMovieService } from 'src/app/service/api-movie.service';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.scss']
})
export class DetailsMovieComponent implements OnInit {
  public detailsMovie: any
  public actorsDetailsMovie: any = []
  public isLoading = false

  
  constructor(private activatedRoute: ActivatedRoute, private apiMovieService: ApiMovieService) {

  }

  ngOnInit(): void {
    const imdbID = this.activatedRoute.snapshot.params['imdbID'];
    this.allDetailsMovie(imdbID)
  }


  allDetailsMovie(imdbID: string) {
    this.isLoading = true
    this.apiMovieService.getDetailsMovies(imdbID).subscribe({
      next: (data: any) => {
        this.detailsMovie = data
        this.actorsDetailsMovie = data.Actors.split(/[,]/)
        this.isLoading = false
      },
      error: (err: any) => {
        console.log(err)
      }
    });
  }


}
