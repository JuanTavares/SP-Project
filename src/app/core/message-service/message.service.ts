import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messageSubject = new BehaviorSubject<any>(null);

  constructor() { }

  sendMessage(message: string) {
    this.messageSubject.next(message);
  }
  getMessage(): Observable<any> {
    return this.messageSubject.asObservable();
  }
}
