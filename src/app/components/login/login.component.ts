import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
  })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    passwordCorrect = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) {

    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() { return this.loginForm.controls; }

    logout(){
        this.submitted = false;
        this.passwordCorrect = false;
        this.router.navigate(['login']);
        // window.location.reload();
    }

    onSubmit() {
        console.log('logowanie!!!!!')
        console.log(this.f.username.value)
        console.log(this.f.password.value)
        this.submitted = true;
        
        if(this.f.username.value == 'admin' && this.f.password.value == 'admin'){
            console.log('redirect')
            this.passwordCorrect = true;
            this.router.navigate(['table']);
            return;
        }
        else{
            this.passwordCorrect = false;
        }

        console.log('redirected!')

        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
    }
}