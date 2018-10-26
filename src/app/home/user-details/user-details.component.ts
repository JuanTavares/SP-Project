import { Component, OnDestroy, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { MessageService } from 'src/app/core/message-service/message.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/core/user-service/user.service';
import { User } from '../user-tab/user';

@Component({
  selector: 'sp-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnDestroy {

  userDetails: Object;
  clickedUser: User;
  subscription: Subscription;

  constructor(
    private messageService: MessageService,
    private userService: UserService
  ) {
    this.subscription = this.messageService
      .getMessage()
      .subscribe(clickedUser => {
        this.clickedUser = clickedUser;
      });
  }

  updateDetails() {
    this.userService
      .getUserDetails(this.clickedUser)
      .subscribe(userDetails => {
        console.log(userDetails);
        this.userDetails = userDetails;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
