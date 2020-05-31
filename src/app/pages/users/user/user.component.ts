import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/services/user/user';
import { concat } from 'rxjs';

@Component({
  selector: 'fc-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  
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

}
