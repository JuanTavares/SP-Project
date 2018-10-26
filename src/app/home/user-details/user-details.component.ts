import { Component, OnDestroy } from '@angular/core';
import { MessageService } from 'src/app/core/message-service/message.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/core/user-service/user.service';

@Component({
  selector: 'sp-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnDestroy {

  user: string;
  userDetails: UserDetails;
  subscription: Subscription;

  constructor(
    private messageService: MessageService,
    private userService: UserService
  ) {
    this.subscription = this.messageService
      .getMessage()
      .subscribe(message => {
        this.user = message;
        this.updateDetails();
      });
  }

  updateDetails() {
    this.userService
      .getUserDetails(this.user)
      .subscribe(details => {
        this.userDetails = details;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
