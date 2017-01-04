import {User} from './user.model';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

    private currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
    public redirectURL: string;

    constructor(private http: Http, private router: Router) {
    }

    authenticate(user: User): Observable<boolean> {
        let body = JSON.stringify(user);
        let headers: Headers = new Headers({'Content-Type': 'application/json'});
        let options: RequestOptions = new RequestOptions({headers: headers});
        return this.http.post('/api/authenticate', body, options)
            .map(response => {
                this.currentUser = response.json();
                if (this.currentUser) {
                    localStorage.setItem('currentUser', response.text());
                    return true;
                } else {
                    return false;
                }
            })
    }

    isLoggedIn(): boolean {
        return this.currentUser != null;
    }

    logout(): void {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login'])
    }
}