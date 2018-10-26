import { Component, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/core/user-service/user.service';
import { MessageService } from 'src/app/core/message-service/message.service';
import { Subscription } from 'rxjs';
import { User } from '../user-tab/user';

@Component({
  selector: 'sp-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnDestroy {

  subscription: Subscription;
  clickedUser: User;
  repoList;

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {
    this.subscription = this.messageService
      .getMessage()
      .subscribe(clickedUser => {
        this.clickedUser = clickedUser;
        this.updateRepos();
      });
  }

  updateRepos() {
    this.userService
      .getUsersRepos(this.clickedUser)
      .subscribe(repoList => {
        this.repoList = repoList;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
