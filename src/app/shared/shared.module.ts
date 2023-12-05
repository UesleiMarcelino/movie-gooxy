import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { RouterModule } from '@angular/router';
import { InitialComponent } from './components/initial/initial.component';
import { MovieHeaderComponent } from './components/movie-header/movie-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { ChangeLanguageComponent } from './components/change-language/change-language.component';



@NgModule({
  declarations: [
    InitialComponent,
    MovieSearchComponent,
    MovieHeaderComponent,
    ChangeLanguageComponent
  ],
  exports: [
    MovieSearchComponent,
    MovieHeaderComponent,
    ChangeLanguageComponent,
    TranslateModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ]
})
export class SharedModule { }
