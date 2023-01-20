/*
* Ce fichier contient la définition du service qui
* s'occupe de la récupération des utilisateurs depuis
* le fichier (json) correspondants placé dans le
* dossier ./src/assets
*/

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./userSchema";
import { map } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  userUrl: string = "../../assets/users.json";
  savedUser!:User;

  constructor(private http:HttpClient) {}

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
