import {async, inject, TestBed} from '@angular/core/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {HttpModule, Http, XHRBackend, Response, ResponseOptions} from '@angular/http';
import {Movie} from './movie.model';
import {MovieService} from './movie.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

const makeMovieData = () => [
    {id: 1, title: 'Million Dollar Baby', rating: 5, overview: '', poster_path: '', backdrop_path: ''},
    {id: 2, title: 'True Grit', rating: 4, overview: '', poster_path: '', backdrop_path: ''},
    {id: 3, title: 'The Revenant', rating: 5, overview: '', poster_path: '', backdrop_path: ''},
    {id: 4, title: 'Star Wars', rating: 2, overview: '', poster_path: '', backdrop_path: ''}
] as Movie[];

describe('MovieService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                MovieService,
                {provide: XHRBackend, useClass: MockBackend}
            ]
        });
    }));

    it('should be able to be injected',
        inject([MovieService], (service: MovieService) => {
            expect(service instanceof MovieService).toBe(true);
        }));

    it('should be able to be instantiated with "new"', inject([Http], (http: Http) => {
        expect(http).not.toBeNull('http should be provided');
        let service = new MovieService(http);
        expect(service instanceof MovieService).toBe(true, '"new" service should be of type MovieService');
    }));

    it('should be able to inject MockBackend',
        inject([XHRBackend], (backend: MockBackend) => {
            expect(backend).not.toBeNull('backend should be provided');
        }));


    // nowPlaying(): Observable<Movie[]>
    describe('nowPlaying()', () => {
        let backend: MockBackend;
        let service: MovieService;
        let fakeMovies: Movie[];
        let response: Response;

        beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
            backend = be;
            service = new MovieService(http);
            fakeMovies = makeMovieData();
            let options = new ResponseOptions({status: 200, body: {results: fakeMovies}});
            response = new Response(options);
        }));

        it('should return movies', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

            service.nowPlaying()
                .do(movies => {
                    expect(movies.length).toBe(fakeMovies.length,
                        `expected ${fakeMovies.length} of movies`);
                }).toPromise();
        })));

        it('should be OK returning no movies', async(inject([], () => {
            let localResponse = new Response(new ResponseOptions({status: 200, body: {results: []}}));
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(localResponse));

            service.nowPlaying()
                .do(movies => {
                    expect(movies.length).toBe(0, 'should have no movies');
                }).toPromise();
        })));

        it('should survive server errors', async(inject([], () => {
            let localResponse = new Response(new ResponseOptions({status: 404}));
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(localResponse));

            service.nowPlaying()
                .do(movies => fail('should not respond with movies'))
                .catch(err => {
                    expect(err).toBeDefined('should have an error');
                    return Observable.of(null);
                }).toPromise();
        })));
    });


    // movie(id: number): Observable<Movie>
    describe('movie(id: number)', () => {
        let backend: MockBackend;
        let service: MovieService;
        let fakeMovie: Movie;
        let response: Response;

        beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
            backend = be;
            service = new MovieService(http);
            fakeMovie = makeMovieData()[0];
            let options = new ResponseOptions({status: 200, body: fakeMovie});
            response = new Response(options);
        }));

        it('should return a movie', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

            service.movie(1)
                .do(movie => {
                    expect(movie.title).toBe(fakeMovie.title, 'expected the correct movie to be returned');
                }).toPromise();
        })));
    });
});