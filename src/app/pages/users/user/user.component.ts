import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/core/services/user/user';
import { UserService } from 'src/app/core/services/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fc-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() user: User;
  @ViewChild('userActive') userActive: ElementRef<HTMLInputElement>;
  activateUserSubscription: Subscription;

  constructor(
    private userService: UserService
  ) { }

  
  ngOnInit(): void {
    
  }
  
  ngAfterViewInit(): void {
    this.userActive.nativeElement.checked = this.user.active;
  }
  
  ngOnDestroy(): void {
    this.activateUserSubscription.unsubscribe();
  }

  getInitialsFromName(name: string){
    const splittedName = name.split(' ');
    if(splittedName.length == 1){
      let str1 = splittedName[0].charAt(0).toUpperCase();
      let str2 = splittedName[0].charAt(1).toUpperCase();
      return str1 + str2;
    }
    
    if(splittedName.length > 1){
      let str1 = splittedName[0].charAt(0).toUpperCase();
      let str2 = splittedName[1].charAt(0).toUpperCase();
      return str1 + str2;
    }

  }

  activateUser(guid: string) {
    this.activateUserSubscription = this.userService
      .activateUser(guid, this.userActive.nativeElement.checked)
      .subscribe(
        () => {
          console.log('ativado');
          this.user.active = true;
        },
        err => console.log(err)
      );
  }

}
