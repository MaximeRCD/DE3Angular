/*
* Ce fichier déclare le composant qui affiche les
* l'ensemble des utilsateurs qui ont un compte sur
* le site. Chacun des utilisateurs est cliquable et
* renvoie vers le détail de l'utilisateur en question.
*/

import { Component, OnInit } from '@angular/core';
import { UserService } from "../../service/user.service";
import { User } from "../../service/userSchema";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit{

  userList: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  userSubscriber = {
    next: (_userList: User[]) => _userList.forEach((user:User) => this.userList.push(user)),
    error: (err: any) => console.error(err),
    complete: () => console.log("Complete message")
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(this.userSubscriber);
  }

  OnClick(user: User) {
    this.userService.saveOnClick(user);
    this.router.navigate(["/user-detail"])
  }
}
