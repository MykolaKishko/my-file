import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../film';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  
  title = this.GlobalService.news;
  poster = '';
  text = '';
  p1 = 1;
  p2 = 1;
  films = this.GlobalService.films;
  news = this.GlobalService.news;
  selectedFilm:  Film;
  id: number;

  clearValue: string;
  clearName: string;
  clearPoster: string;
  clearDate: number;
  clearDescription: string;
  clearRating: number;
  clearLocate: string;
  clearUrl: string;
  clearActors: string;
  clearDirector: string;
  clearCategory: string;
  clearViews: number;
  clearTitle: string;
  clearNPoster: string;
  clearText: string;

  constructor( private GlobalService: GlobalService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getFilm(); 
  }

  

// tslint:disable-next-line: max-line-length
  changeFilms(id: number, name: any, poster: any, date: any, rating: any, locate: any, url: any, actors: any, director: any, category: any, views: any, description: any) {
    console.log(name);
    this.films.forEach((element, i) => {
      if(element.id === id) {
        element.name = name;
        element.poster = poster;
        element.date = date;
        element.rating = rating;
        element.locate = locate;
        element.actors = actors; 
        element.director = director;
        element.category = category;
        element.views = views;
        element.description = description; 
      }
    });
  }

  changeNews(id: number, title: any, poster: any, text: any) {
    this.news.forEach((element, i) => {
      if(element.id === id) {
        element.title = title;
        element.poster = poster;
        element.text = text;
        console.log(this.news);
 
      }
 
    });
  }

addNewFilms(name: string, poster: string, date: number, rating: number, locate: string, url: string, actors: string, director: string, category: string, views: number, description: string){
  let number: number = this.films.length+1;
  
  let newName: string = name;
  let newPoster: string = poster;
  let newDate: number = date;
  let newRating: number = rating;
  let newLocate: string = locate;
  let newUrl: string = url;
  let newActors: string = actors;
  let newDirector: string = director;
  let newCategory: string = category;
  let newViews: number = views;
  let newDescription: string = description;



this.clearName = "";
this.clearPoster = "";
this.clearDate = null;
this.clearDescription = "";
this.clearRating = null;
this.clearLocate = "";
this.clearUrl = "";
this.clearActors = "";
this.clearDirector = "";
this.clearCategory = "";
this.clearViews = null;

// tslint:disable-next-line: prefer-const
  let newFilmsAdd = {
    name: newName,
    poster: newPoster,
    date: newDate,
    description: newDescription,
    rating: newRating,
    locate:  newLocate,
    url: newUrl,
    actors: newActors,
    director: newDirector,
    category: newCategory,
    id: number,
    like: false,
    views: newViews,
    view: false,
    comment: ['']
  }
  this.films.push(newFilmsAdd);
  console.log(this.films);

}
  
addNewNews(title: any, poster: any, text: any) {
  let number = this.news.length+1;
  let newTitle = title;
  let newPoster = poster;
  let newText = text;

  this.clearTitle = "";
  this.clearNPoster = "";
  this.clearText = "";

  let newNews = {
    id: number,
    view: false,
    title: newTitle,
    text: newText,
    poster: newPoster,
    like: false,
    comment: []
  }
  this.news.push(newNews);
}
 
 
  getFilm(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedFilm = this.GlobalService.films.find(elem => elem.id === id);

  }


  deleteFilm(id: number) {
    event.stopPropagation;
    this.films.forEach((element, i) => {
      if(element.id === id) {
        this.films.splice(i, 1);
      }
    });
  }

  deleteNews(id: number) {
    event.stopPropagation;
    this.news.forEach((element, i) => {
      if(element.id === id) {
        this.news.splice(i, 1);
      }
    });
  }












}  
    

