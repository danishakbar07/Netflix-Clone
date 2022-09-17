import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';


import {Movies} from '../models/movies'

const enum endpoint{
  latest = '/movie/latest',
  now_playing='/movie/now_playing',
  popular='/movie/popular',
  top_rated='/movie/top_rated',
  upcoming='/movie/upcoming',
  trending='/trending/all/week',
  orginals='/discover/tv'
}


@Injectable({
  providedIn: 'root'
})
export class MovieService {


  private URL=environment.url
  private api_key= environment.api

  constructor(private http: HttpClient) { }

  

  getLatestMovies():Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.latest}?api_key=${this.api_key}`)
  }

  getNowPlaying():Observable<any>{
    return this.http.get<any>(`${this.URL}${endpoint.now_playing}?api_key=${this.api_key}`)
  }

  getOrginalsMovies():Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.orginals}?api_key=${this.api_key}`)
  }

  getPopularMovies():Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.popular}?api_key=${this.api_key}`)
  }

  getTopRated():Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.top_rated}?api_key=${this.api_key}`)
  }

  getUpcomingMovies():Observable<Movies>{
    return this.http.get<Movies>(`https://api.themoviedb.org/3/movie/upcoming?api_key=${this.api_key}`)
  }

  getTrendingMovies():Observable<Movies>{
    return this.http.get<Movies>(`${this.URL}${endpoint.trending}?api_key=${this.api_key}`)
  }
}
