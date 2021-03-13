import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = "https://api.themoviedb.org/3"
  private api_key = String(environment.api_key);

  constructor(private http: HttpClient) { 

  }

  getMovies(){
    return this.http.get(this.baseUrl + "/movie/popular?api_key=" + this.api_key)
    
  }
}
