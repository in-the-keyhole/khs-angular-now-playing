import {Injectable} from '@angular/core';
import {Movie} from './movie.model';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import "rxjs/add/operator/map";

@Injectable()
export class MovieService {

    constructor(private http: Http) {
    }

    nowPlaying(): Observable<Movie[]> {
        return this.http.get('/api/nowPlaying').map(response =>
            response.json().results as Movie[]
        )
    }
}