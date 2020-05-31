import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { AlertModalService } from '../shared/components/alert-modal/service/alert-modal.service';
import { PlatformDetectService } from '../core/services/platform-detect/platform-detect.service';

@Component({
  selector: 'fc-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  userInvalid: boolean = false;
  passInvalid: boolean = false;
  @ViewChild('usernameInput') usernameInput: ElementRef<HTMLInputElement>;
  @ViewChild('form') form: NgForm;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertService: AlertModalService,
    private platformDetectService: PlatformDetectService
  ) { }

  ngAfterViewInit(): void {
    this.platformDetectService.isPlatformBrowser() &&
      this.usernameInput.nativeElement.focus();
  }

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
    if(this.loginForm.valid && !this.loginForm.pending){
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;
      this.authService
        .authenticate(username, password)
        .subscribe(
          () => this.router.navigate(['home']),
          err => {
            this.alertService.danger('Erro', err.error.message);
            this.platformDetectService.isPlatformBrowser() &&
              this.usernameInput.nativeElement.focus();
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

  private resetForm(){
    this.userInvalid = false;
    this.passInvalid = false;
    this.loginForm.reset();
    this.form.resetForm();
    this.usernameInput.nativeElement.focus();
  }

}
