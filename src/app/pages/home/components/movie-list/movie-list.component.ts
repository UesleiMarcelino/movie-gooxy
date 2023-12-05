import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { NewMovieModel } from 'src/app/model/newMovie-model';
import { UpcomingMovieModel } from 'src/app/model/upcomingMovie-model';
import { error } from 'jquery';
import { ApiMovieService } from 'src/app/service/api-movie.service';



@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit, AfterViewChecked {
  public newMovies = new Array<NewMovieModel>();
  public upcomingMovies = new Array<UpcomingMovieModel>();
  public searchNewMovies = new Array<NewMovieModel>();
  public searchUpcomingMovies = new Array<NewMovieModel>();
  pageSearched = false;
  public isLoading = false
  public msgError = false

  constructor(private apiMovieService: ApiMovieService,) {

  }

  ngAfterViewChecked(): void {
    this.startCarousel()
  }

  ngOnInit(): void {
    this.listNewMovies()
    this.listUpcomingMovies()

  }

  public listNewMovies() {
    this.isLoading = true
    this.apiMovieService.getNewMovies().subscribe({
      next: (e: any) => {
        this.newMovies = e.Search
        this.isLoading = false
      },
      error: (err: any) => {
        console.log(err)
        this.isLoading = false
      }
    });
  }

  public listUpcomingMovies() {
    this.isLoading = true
    this.apiMovieService.getUpcomingMovies().subscribe({
      next: (e: any) => {
        this.upcomingMovies = e.Search
        this.isLoading = false
      },
      error: (err: any) => {
        this.isLoading = false
      }
    });

  }

  public search(value: string) {
    if (value == '') {
      this.pageSearched = false
      return
    } else {
      this.searchNewMovie(value)
      this.searchUpcomingMovie(value)
      this.pageSearched = true
    }
  }

  public searchNewMovie(value: string) {
    this.apiMovieService.getSearchNewMovies(value).subscribe({
      next: (e: any) => {

        if (e.Response == "False") {
          this.msgError = true
        }

        const filter = e.Search.filter((res: any) => {
          return !res.Title.indexOf(value.charAt(0).toUpperCase());
        })
        this.searchNewMovies = filter;
      },
      error: (err: any) => {
      }
    });
  }

  public searchUpcomingMovie(value: string) {
    this.apiMovieService.getSearchUpcomingMovies(value).subscribe({
      next: (e: any) => {

        if (e.Response == "False") {
          this.msgError = true
        }
        const filter = e.Search.filter((res: any) => {
          return !res.Title.indexOf(value.charAt(0).toUpperCase());
        })
        this.searchUpcomingMovies = filter;
      },

    });
  }

  public startCarousel(): void {
    let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
      const minPerSlide = 4
      let next = el.nextElementSibling
      for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
          // wrap carousel by using first child
          next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.childNodes[0])
        next = next.nextElementSibling
      }
    })
  }

}
