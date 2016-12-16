import {Component, OnInit} from '@angular/core';
import {User} from './user.model';
import {Router} from '@angular/router';

@Component({
    templateUrl: './login-component.html',
    styleUrls: ['./login-styles.css']
})
export class LoginComponent implements OnInit {

    private errorMessage: string;
    private user: User;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.user = new User();
    }

    onSubmit(): void {
        // For now, just log the user
        console.log('Login for ->', this.user);
        this.router.navigate(['']);
    }
}