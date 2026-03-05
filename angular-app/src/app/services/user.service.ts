import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "http://localhost:8081/user";

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.httpClient.get(this.baseURL + "/all");
  }

  deleteUser(id: string): Observable<any> {
    return this.httpClient.delete(this.baseURL + "/delete/" + id);
  }

  addUser(firstname: string, lastname: string): Observable<any> {
    let body = { firstName: firstname, lastName: lastname };
    let url = this.baseURL + "/add";
    return this.httpClient.post(url, body);
  }
}