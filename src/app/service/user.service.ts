import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./userSchema";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl: string = "../../assets/users.json"
  savedUser!:User;
  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get<User[]>(this.userUrl)
  }
  saveOnClick(user: User){
    this.savedUser = user;
  }

}
