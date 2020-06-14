import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/core/services/user/user';
import { UserService } from 'src/app/core/services/user/user.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertModalService } from 'src/app/shared/components/alert-modal/service/alert-modal.service';

@Component({
  selector: 'fc-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() user: User;
  @Output() delete = new EventEmitter();
  @ViewChild('userActive') userActive: ElementRef<HTMLInputElement>;
  activateUserSubscription: Subscription;
  imagePath: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private alertService: AlertModalService
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
    if(this.userService.getCurrentUser() === guid){
      this.alertService.warning('Desativação não permitida', 'Não é permitido desativar o usuário corrente.');
      this.userActive.nativeElement.checked = true;
    } else if(this.user.username === 'admin@fc-collab.com'){
      this.alertService.warning('Desativação não permitida', 'Não é permitido desativar o usuario Administrator.');
      this.userActive.nativeElement.checked = true;
    } else { 
      this.activateUserSubscription = this.userService
        .activateUser(guid, this.userActive.nativeElement.checked)
        .subscribe(
          () => {
            this.user.active = true;
          },
          err => console.log(err)
        );
    }
  }

  getProfileImage(avatar: string) {
    this.imagePath = this.userService.getUserImage(avatar);
  }

  goTo(guid: string) {
    // this.router.navigate(['users', guid]);
    this.router.navigateByUrl(`/users/${guid}`);
  }

  deleteUser(guid: string) {
    if(this.userService.getCurrentUser() === guid){
      this.alertService.warning('Deleção não permitida', 'Não é permitido deletar o usuário corrente.');
    } else if(this.user.username === 'admin@fc-collab.com'){
      this.alertService.warning('Deleção não permitida', 'Não é permitido deletar o usuario Administrator.');
    } else {
      this.userService
        .deleteUser(guid)
        .subscribe(() => {
          //console.log('Usuario deletado');
          this.alertService.success('Deleção de Usuário', 'Usuário deletado com sucesso!');
          this.delete.emit();
        },
        err => {
          this.alertService.danger('Deleção de Usuário', '500 - Erro ao deletar o usuário...<br>Tente novamente mais tarde.');
        });
    }
  }

}
