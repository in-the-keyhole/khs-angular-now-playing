import {Component, OnInit}                  from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {User} from './user.model';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
    templateUrl: './login-component.html',
    styleUrls: ['./login-styles.css']
})
export class LoginComponent implements OnInit {

    public errorMessage: string;
    private user: User;
    public loginForm: FormGroup;

    constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    }

    ngOnInit(): void {
        this.user = new User();
        this.buildForm();
    }

    onSubmit(): void {
        this.user = this.loginForm.value;
        this.authService.authenticate(this.user).subscribe(
            success => {
                this.errorMessage = null;
                this.router.navigate([this.authService.redirectURL || '']);
            },
            failure => {
                this.errorMessage = failure.status === 401 ? 'An invalid username or password was entered.' : 'Something bad happened'
            }
        );
    }

    buildForm(): void {
        this.loginForm = this.fb.group({
            'username': [this.user.username, [
                Validators.required,
                Validators.minLength(4)
            ]],
            'password': [this.user.password, Validators.required]
        });
        this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
    }

    onValueChanged(data?: any) {
        if (!this.loginForm) {
            return;
        }
        const form = this.loginForm;
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

    formErrors = {
        'username': '',
        'password': ''
    };
    validationMessages = {
        'username': {
            'required': 'Username is required.',
            'minlength': 'Username must be at least 4 characters long.'
        },
        'password': {
            'required': 'Password is required.'
        }
    };
}
