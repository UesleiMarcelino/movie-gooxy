import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DetailsMovieComponent } from './home/components/details-movie/details-movie.component';
import { MovieListComponent } from './home/components/movie-list/movie-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsMovieComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    SharedModule
  ],
})
export class PagesModule { }
