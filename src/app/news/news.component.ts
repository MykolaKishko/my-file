import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  p: number = 1;
  news = this.GlobalService.news;
  myFilm = this.GlobalService.myFilm;
  myNews = this.GlobalService.myNews;
  likeFilm = this.GlobalService.likeFilm;
  likeNews = this.GlobalService.likeNews;


  constructor( public GlobalService: GlobalService ) { }

  ngOnInit() {
    let elmnt = document.getElementById("content");
    elmnt.scrollIntoView();
  }

  newsSelect( id: number) {
    this.news.forEach((element, i) => {
      if( element.view === true) { 
        console.log('Вже є');
     } else if(element.id == id) {
        element.view = true;
        this.myNews.push( element ); 
        console.log(element);
      }
    });
  }

  view( id: number) {
    event.stopPropagation();
    this.news.forEach(element => {
      if(element.id == id) {
        this.myNews.push(element); 
        element.view = !element.view;
        console.log(this.myNews);
      }
    });
  }

  viewSel( id: number) {
    event.stopPropagation();
    this.myNews.forEach((element, i) => {
      if(element.id == id) {
        this.myNews.splice(i, 1); 
        element.view =!element.view;
        console.log(this.myNews);
      }
    });
  } 

  like( id: number) {
    event.stopPropagation();
    this.news.forEach(element => {
      if(element.id == id) {
        this.likeNews.push(element); 
        element.like = !element.like;
        console.log(this.likeNews);
      }
    });
  } 

  likeSel( id: number) {
    event.stopPropagation();
    this.likeNews.forEach((element, i) => {
      if(element.id == id) {
        this.likeNews.splice(i, 1); 
        element.like = !element.like;
        console.log(this.likeNews);
      }
    });
  }
}