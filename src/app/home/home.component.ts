import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  p: number = 1;
  films = this.GlobalService.films;
  soonFilms = this.GlobalService.soonFilms;

  myFilm = this.GlobalService.myFilm;
  likeFilm = this.GlobalService.likeFilm;
  searchStr = '';
 
  constructor( private GlobalService: GlobalService ) { }

  ngOnInit() {}

  filmSelect( id: any) {
    this.films.forEach((element, i) => {
      if( element.view === true ) { 
        console.log('Вже є'); 
      } else if( element.id == id ) {
          element.view = true;
          this.myFilm.push(element); 
          console.log(element);
        }
    });
  }

  view( id: number) {
    event.stopPropagation();
    this.films.forEach(element => {
      if(element.id == id) {
        this.myFilm.push(element); 
        element.view = !element.view;
        console.log(this.myFilm);
      }
    });
  }

  like( id: number) {
    event.stopPropagation();
    this.films.forEach(element => {
      if(element.id == id) {
        this.likeFilm.push(element); 
        element.like = !element.like;
        console.log(this.likeFilm);
      }
    });
  } 

  likeSel( id: number) {
    event.stopPropagation();
    this.likeFilm.forEach((element, i) => {
      if(element.id == id) {
        this.likeFilm.splice(i, 1); 
        element.like = !element.like;
        console.log(this.likeFilm);
      }
    });
  } 

  viewSel( id: number) {
    event.stopPropagation();
    this.myFilm.forEach((element, i) => {
      if(element.id == id) {
        this.myFilm.splice(i, 1); 
        element.view =!element.view;
        console.log(this.myFilm);
      }
    });
  } 
}
