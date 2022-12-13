import { Component } from '@angular/core';
import {User} from "../../service/userSchema";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {Order} from "../../service/orderSchema";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent {

  orderDetail!: Order;

  constructor(private orderService: OrderService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.orderDetail = this.orderService.savedOrder;
  }

  returnToList() {
    this.router.navigate(["/orders"])
  }

}
