import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InitialComponent } from './shared/components/initial/initial.component';

const routes: Routes = [
  {
    path: '',
    component: InitialComponent,
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/pages.module').then(p => p.PagesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
