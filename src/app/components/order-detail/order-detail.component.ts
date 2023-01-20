/*
* Ce fichier déclare le composant qui affiche les
* détails d'une commande lorsqu'on clique sur une
* commande depuis la liste.
*/

import { Component } from '@angular/core';
import { User } from "../../service/userSchema";
import { UserService } from "../../service/user.service";
import { Router } from "@angular/router";
import { Order } from "../../service/orderSchema";
import { OrderService } from "../../service/order.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})

export class OrderDetailComponent {

  orderDetail!: Order;
  userDetail!: User;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit(): void {
    this.orderDetail = this.orderService.savedOrder;
  }

  findUser(id: string){
    this.userService.getUserById(+id).subscribe(
      res =>{
        this.userService.savedUser = res[0];
        this.router.navigate([`/user-detail`])
      })
  }

  returnToList() {
    this.router.navigate(["/orders"])
  }
}
