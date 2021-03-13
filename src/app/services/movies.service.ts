import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import {environment} from '../../environments/environment';
import { Movies } from '../models/movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl = "https://api.themoviedb.org/3"
  private api_key = String(environment.api_key);
  
  constructor(private http: HttpClient) { 

  }

  getMovies(){
    return this.http.get(this.baseUrl + "/movie/popular?api_key=" + this.api_key).pipe(
      map((data)=>{
        return data;
      }), catchError( error => {
        return throwError('Something went wrong!');
      })
    )
    
  }
}
