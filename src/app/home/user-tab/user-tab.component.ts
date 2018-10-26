import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from 'src/app/core/user-service/user.service';
import { MessageService } from 'src/app/core/message-service/message.service';

@Component({
  selector: 'sp-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit {

  userList: User[] = [];
  number = 0;
  paginator;

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.userService
      .getUsers(this.number)
      .subscribe(users => {
        this.userList = this.userList.concat(users);
      });
  }

  pagination(number) {
    this.number += number;
    console.log(this.number);
    this.userService
      .getUsers(this.number)
      .subscribe(users => {
        this.userList = users;
      });
  }

  sendMessage(user) {
    this.messageService.sendMessage(user);
  }

}
