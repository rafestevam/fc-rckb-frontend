import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/services/user/user';
import { UserService } from 'src/app/core/services/user/user.service';
import { EventEmitter } from 'protractor';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { AlertModalService } from 'src/app/shared/components/alert-modal/service/alert-modal.service';
import { phoneNumberValidator } from './validators/phone-number.validator';

@Component({
  selector: 'fc-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  usersForm: FormGroup;
  files: File[] = [];
  userId: string;
  user: User;
  userSubscription: Subscription;
  imagePath: string;
  usernameInvalid: boolean;
  nameInvalid: boolean;
  cellphoneInvalid: boolean;
  roleInvalid: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private alertService: AlertModalService
  ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id ? this.route.snapshot.params.id : '';
    let disabled = false;
    disabled = this.userId ? true : false;
    this.usersForm = this.formBuilder.group({
      username: [
        {value:'', disabled},
        Validators.required
      ],
      name: [
        '',
        Validators.required
      ],
      cellPhone: ['',
        phoneNumberValidator
      ],
      role: ['',
        Validators.required
      ],
      userActive: [false]
    });

    
    if(this.userId) {
      this.userSubscription = this.userService
        .getUser(this.userId)
        .subscribe(user => {
          this.usersForm.controls['username'].setValue(user.username);
          this.usersForm.controls['name'].setValue(user.profile.name);
          this.usersForm.controls['cellPhone'].setValue(user.profile.cellPhone);
          this.usersForm.controls['userActive'].setValue(user.active);
          this.usersForm.controls['role'].setValue(user.role);
          this.imagePath = this.getProfileImage(user.profile.avatar);
        })
    }
  }

  onSelect(event) {
		// console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		// console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
  }

  createOrUpdate(){
    if(this.usersForm.valid && !this.usersForm.pending){
      const user = this.usersForm.getRawValue();
      if(this.userId){
        this.userService
          .updateUser(user, this.userId, this.files[0])
          .subscribe((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse){
              //console.log('foto carregada...')
              this.alertService.success('Usuário Modificado', 'Usuário modificado com sucesso!');
            }
          })
      } else {
        this.userService
          .createUser(user, this.files[0])
          .subscribe((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse){
              //console.log('usuario criado...')
              this.alertService.success('Usuário Criado', 'Usuário criado com sucesso!');
              this.router.navigate(['/users']);
            }
          })
      }
    } else {
      this.usernameInvalid = this.usersForm.get('username').errors.required ? true : false;
      this.nameInvalid = this.usersForm.get('name').errors.required ? true : false;
      this.cellphoneInvalid = this.usersForm.get('cellPhone').errors?.phoneNumber ? true : false;
      this.roleInvalid = this.usersForm.get('role').errors.required ? true : false;
    }

  }

  changeValue(event: EventEmitter) {
    // console.log(event);
  }

  getProfileImage(avatar: string) {
    return this.imagePath = this.userService.getUserImage(avatar);
  }

  usernameTouched() {
    this.usernameInvalid = this.usersForm.get('username').errors?.required ? true : false;
  }

  nameTouched() {
    this.nameInvalid = this.usersForm.get('name').errors?.required ? true : false;
  }

  cellphoneTouched() {
    this.cellphoneInvalid = this.usersForm.get('cellPhone').errors?.phoneNumber ? true : false;
  }

  roleTouched() {
    this.roleInvalid = this.usersForm.get('role').errors?.required ? true : false;
  }

}
