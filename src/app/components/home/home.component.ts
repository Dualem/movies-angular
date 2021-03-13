import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model = {
    click: true
  }
  movies: object = {};

  constructor(private moviesService: MoviesService) { 
  }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    this.moviesService.getMovies()
      .subscribe(result => {
        this.movies = result;
        console.log(result);
      })
        
  }

}
