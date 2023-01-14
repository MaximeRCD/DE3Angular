import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Order} from "../../service/orderSchema";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  orderList: Order[] = [];

  constructor(
    private orderService: OrderService,
    private router: Router,
  ) {
  }

  userSubscriber = {
    next: (_orderList: Order[]) => _orderList.forEach((order:Order) => this.orderList.push(order)),
    error: (err: any) => console.error(err),
    complete: () => console.log("Complete message")
  }

  ngOnInit(): void {
    this.orderService.getUser().subscribe(this.userSubscriber);
  }

  OnClick(order: Order) {
    this.orderService.saveOnClick(order);
    this.router.navigate(["/order-detail"])
  }

}
