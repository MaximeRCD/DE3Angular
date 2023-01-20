/*
* Ce fichier déclare le composant qui affiche les
* le détail des informations concernant un utilisateur
* choisi à partir de la liste des utilisateurs affichés.
*/

import { Component, OnInit } from '@angular/core';
import { User } from "../../service/userSchema";
import { UserService } from "../../service/user.service";
import { Router } from "@angular/router";
import { OrderService } from "../../service/order.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})

export class UserDetailComponent implements OnInit{

  userDetail!: User;
  fromOrder: boolean = false;

  constructor(
    private orderService: OrderService,
    private userService: UserService,
    private router: Router) {}

  ngOnInit(): void {
    this.userDetail = this.userService.savedUser;
    if(this.orderService.savedOrder){
      this.fromOrder=true;
    }
  }

  returnToList() {
    this.router.navigate(["/users"])
  }

  returnToOrder(){
    this.router.navigate(["/order-detail"])
  }
}
