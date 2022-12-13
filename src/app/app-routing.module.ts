import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./components/user-list/user-list.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";
import {ContactComponent} from "./components/contact/contact.component";
import {OrderListComponent} from "./components/order-list/order-list.component";
import {OrderDetailComponent} from "./components/order-detail/order-detail.component";

const routes: Routes = [
  {path: "", component: UserListComponent},
  {path: "users", component:UserListComponent},
  {path: "user-detail", component:UserDetailComponent},
  {path: "orders", component:OrderListComponent},
  {path: "order-detail", component:OrderDetailComponent},
  {path: "contact", component:ContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
