import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/home/user-tab/user';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSubject = new Subject<any>();

  constructor() { }

  sendMessage(message: User) {
    this.messageSubject.next(message);
  }
  getMessage(): Observable<any> {
    return this.messageSubject.asObservable();
  }
}
