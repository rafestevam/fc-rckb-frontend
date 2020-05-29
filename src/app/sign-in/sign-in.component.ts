import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fc-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  userInvalid: boolean = false;
  passInvalid: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['',
        Validators.required
      ],
      password: ['',
        Validators.required
      ]
    });
  }

  login() {
    if(this.loginForm.valid){
      this.authService
        .authenticate()
        .subscribe(
          () => this.router.navigate(['home'])
        )
    }
  }

  usernameTouched(){
    if(this.loginForm.get('username').errors.required){
      this.userInvalid = true;
    }
  }

  passwordTouched(){
    if(this.loginForm.get('password').errors.required){
      this.passInvalid = true;
    }
  }

}
