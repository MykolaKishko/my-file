import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { Film } from '../film';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  
  selectedFilm:  Film;
  filterName : string = null;
  clearValue: string;
 
  constructor( private GlobalService: GlobalService, private route: ActivatedRoute ) { }
 
  ngOnInit() {
    this.getFilm();
    let elmnt = document.getElementById("content");
    elmnt.scrollIntoView();
  }

  add(name: any) {
    if(name.trim()) {
      this.selectedFilm.comment.push(name); 
    }
    this.clearValue = '';
  }
 
  getFilm(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedFilm = this.GlobalService.films.find(elem => elem.id === id);
  }
}
