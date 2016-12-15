import {Injectable} from '@angular/core';
import {Movie} from './movie.model';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {

    constructor(private http: Http) {
    }

    nowPlaying(): Observable<Movie[]> {
        return this.http.get('/api/nowPlaying').map(response =>
            response.json().results as Movie[]
        )
    }

    updateMovie(movie: Movie): Observable<Response> {
        let body: string = JSON.stringify(movie);
        let headers: Headers = new Headers({'Content-Type': 'application/json'});
        let options: RequestOptions = new RequestOptions({headers: headers});
        return this.http.put('/api/movies/' + movie.id, body, options);
    }
}