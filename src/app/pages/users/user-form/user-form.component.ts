import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/core/services/user/user';
import { UserService } from 'src/app/core/services/user/user.service';
import { tap, map } from 'rxjs/operators';
import { EventEmitter } from 'protractor';
import { HttpEvent, HttpResponse } from '@angular/common/http';

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

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private userService: UserService
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
      cellPhone: [''],
      role: ['',
        Validators.required
      ],
      userActive: [false]
    });

    
    if(this.userId) {
      this.userSubscription = this.userService
        .getUser(this.userId)
        //.pipe(tap(user => console.log(user?.role)))
        .subscribe(user => {
          let userRole = 0;
          // switch(user.role) {
          //   case 'administrator':
          //     userRole = 0;
          //   case 'superuser':
          //     userRole = 1;
          //   case 'collaborator':
          //     userRole = 2;
          //   default:
          //     userRole = -1; 
          // }
          //console.log(user);
          this.usersForm.controls['username'].setValue(user.username);
          this.usersForm.controls['name'].setValue(user.profile.name);
          this.usersForm.controls['cellPhone'].setValue(user.profile.cellPhone);
          this.usersForm.controls['userActive'].setValue(user.active);
          this.usersForm.controls['role'].setValue(user.role);
        })
        // .subscribe(user => {
        //   this.user = user
        // },
        // err => {
        //   console.log(err);
        // })
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
    const user = this.usersForm.getRawValue();
    if(this.userId){
      this.userService
        .updateUser(user, this.userId, this.files[0])
        .subscribe((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse){
            console.log('foto carregada...')
          }
        })
    } else {
      this.userService
        .createUser(user, this.files[0])
        .subscribe((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse){
            console.log('usuario criado...')
          }
        })
    }

  }

  changeValue(event: EventEmitter) {
    // console.log(event);
  }

}
