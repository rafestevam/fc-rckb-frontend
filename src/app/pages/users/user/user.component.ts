import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/core/services/user/user';
import { UserService } from 'src/app/core/services/user/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'fc-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() user: User;
  @ViewChild('userActive') userActive: ElementRef<HTMLInputElement>;
  activateUserSubscription: Subscription;
  imagePath: string;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  
  ngOnInit(): void {
    this.getProfileImage(this.user.profile.avatar);
    console.log(this.imagePath);
  }
  
  ngAfterViewInit(): void {
    this.userActive.nativeElement.checked = this.user.active;
  }
  
  ngOnDestroy(): void {
    if(this.activateUserSubscription)
      this.activateUserSubscription.unsubscribe();
  }

  getInitialsFromName(name: string){
    return this.userService.getUserInitials(name);
  }

  activateUser(guid: string) {
    this.activateUserSubscription = this.userService
      .activateUser(guid, this.userActive.nativeElement.checked)
      .subscribe(
        () => {
          this.user.active = true;
        },
        err => console.log(err)
      );
  }

  getProfileImage(avatar: string) {
    this.imagePath = this.userService.getUserImage(avatar);
  }

  goTo(guid: string) {
    // this.router.navigate(['users', guid]);
    this.router.navigateByUrl(`/users/${guid}`);
  }

  deleteUser(guid: string) {
    this.userService
      .deleteUser(guid)
      .subscribe(() => {
        console.log('Usuario deletado');
        this.router.navigate(['users']);
      })
  }

}
