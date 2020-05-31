import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { AlertModalService } from '../shared/components/alert-modal/service/alert-modal.service';

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
    private router: Router,
    private alertService: AlertModalService
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
    //this.alertService.danger('Teste Titulo', 'Teste Mensagem');
    if(this.loginForm.valid && !this.loginForm.pending){
      this.authService
        .authenticate()
        .subscribe(
          () => this.router.navigate(['home']),
          err => {
            this.alertService.danger('Erro', err.message);
          }
        )
    } else {
      this.userInvalid = this.loginForm.get('username').errors.required ? true : false;
      this.passInvalid = this.loginForm.get('password').errors.required ? true : false;
    }
  }

  usernameTouched(){
    this.userInvalid = this.loginForm.get('username').errors?.required ? true : false;
  }

  passwordTouched(){
    this.passInvalid = this.loginForm.get('password').errors?.required ? true : false;
  }

}
