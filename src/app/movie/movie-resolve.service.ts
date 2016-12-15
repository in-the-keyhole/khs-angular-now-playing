import {Injectable} from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Movie} from './movie.model';
import {MovieService} from './movie.service';
import {Observable} from 'rxjs';

@Injectable()
export class MovieResolve implements Resolve<Movie> {

    constructor(private movieService: MovieService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> {
        return this.movieService.movie(route.params['id']);
    }
}