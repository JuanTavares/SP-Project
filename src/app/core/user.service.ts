import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(API_URL + '/users');
  }
  getUsersRepos(user) {
    return this.http.get(API_URL + '/users/' + user + '/repos');
  }
}
