import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public movies: Movies = {
    page: 1,
    results: [],
    total_pages: 1,
    total_results: 1
  }

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(){
    this.moviesService
      .getMovies()
      .subscribe((data:any)=>{
        console.log(data)
        this.movies = data;
      })
  }

}
