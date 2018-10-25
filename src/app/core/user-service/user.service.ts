import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../home/user-tab/user';
import { UserDetails } from '../home/user-details/user-details';
import { Repos } from '../home/repos-tab/repos';

const API_URL = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(API_URL + '/users');
  }
  getUserDetails(user) {
    return this.http.get<UserDetails>(API_URL + '/users/' + user);
  }
  getUsersRepos(user) {
    return this.http.get<Repos>(API_URL + '/users/' + user + '/repos');
  }
}
