import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { News } from '../film';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  selectedNewss:  News;
  filterName : string = null;
  clearValue: string;

  constructor( private GlobalService: GlobalService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getNews();
    let elmnt = document.getElementById("content");
    elmnt.scrollIntoView();
  }

  add(name: string) {
    if(name.trim()) {
      this.selectedNewss.comment.push(name); 
    }
    this.clearValue = '';
  }
 
  getNews(){
    const id = +this.route.snapshot.paramMap.get('id');
    this.selectedNewss = this.GlobalService.news.find(elem => elem.id === id);

  } 
} 
