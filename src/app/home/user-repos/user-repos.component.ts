import { Component, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/core/user-service/user.service';
import { MessageService } from 'src/app/core/message-service/message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'sp-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.css']
})
export class UserReposComponent implements OnDestroy {

  user: string;
  subscription: Subscription;

  constructor(
    private userService: UserService,
    private messageService: MessageService
  ) {
    this.subscription = this.messageService
      .getMessage()
      .subscribe(message => {
        this.user = message;
        this.updateRepos();
      });
  }

  updateRepos() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
