import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./userSchema";
import {filter, map} from "rxjs";

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

  getUserById(id: number){
    return this.http.get<User[]>(this.userUrl).pipe(map(users=>users.filter(user=>user.id === id)))
  }

  saveOnClick(user: User){
    this.savedUser = user;
  }

}
