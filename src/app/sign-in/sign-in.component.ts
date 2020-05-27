import { Component, OnInit } from '@angular/core';
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
    //console.log('loguei!');
    this.authService
      .authenticate()
      .subscribe(
        () => this.router.navigate(['home'])
      )
  }

}
