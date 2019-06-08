import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MyFilmsComponent } from './my-films/my-films.component';
import { FilmComponent } from './film/film.component';
import { NewComponent } from './new/new.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'new/:id', component: NewComponent },
  { path: 'film/:id', component: FilmComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'myFilms', component: MyFilmsComponent },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
