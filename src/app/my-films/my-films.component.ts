import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.scss']
})
export class MyFilmsComponent implements OnInit {
  p1 = 1;
  p2 = 1;
  p3 = 1;
  p4 = 1;
  films = this.GlobalService.films;
  news = this.GlobalService.news;
  myFilm = this.GlobalService.myFilm;
  myNews = this.GlobalService.myNews;
  likeFilm = this.GlobalService.likeFilm;
  likeNews = this.GlobalService.likeNews;
  constructor( private GlobalService: GlobalService ) { }

  ngOnInit() { }

  mFilmDel( id: number ) {
    this.myFilm.forEach((element, i) => {
      if(element.id == id) {
        this.myFilm.splice(i, 1); 
        element.view = false;
        this.films[id].view = false;
        console.log(this.myFilm);
      }
    });
  }

  lFilmDel( id: number ) {
    this.likeFilm.forEach((element, i) => {
      if(element.id == id) {
        this.likeFilm.splice(i, 1); 
        element.like = false;
        this.films[id].like = false;
        console.log(this.likeFilm);
      }
    });
  }

  mNewsDel( id: number ) {
    this.myNews.forEach((element, i) => {
      if(element.id == id) {
        this.myNews.splice(i, 1); 
        element.view = false;
        this.news[id].view = false;
        console.log(this.myNews);
      }
    });
  }

  lNewsDel( id: number ) {
    this.likeNews.forEach((element, i) => {
      if(element.id == id) {
        this.likeNews.splice(i, 1); 
        element.like = false;
        this.news[id].like = false;
        console.log(this.likeNews);
      }
    });
  }
}