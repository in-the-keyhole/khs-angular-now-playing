import {Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';

export const loginRoutes: Routes = [
    {path: 'login', component: LoginComponent}
];

export const authProviders = [
    AuthService,
    AuthGuard
];