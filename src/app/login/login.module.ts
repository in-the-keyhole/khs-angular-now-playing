import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login.component';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent
    ]
})
export class LoginModule {

}