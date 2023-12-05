import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
  @Output() public emmitSearched: any = new EventEmitter();

  public searchMovie(value: any){
    this.emmitSearched.emit(value);
  }
}
