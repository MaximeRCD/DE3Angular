import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from "./components/user-list/user-list.component";
import { UserDetailComponent } from "./components/user-detail/user-detail.component";
import { ContactComponent } from "./components/contact/contact.component";
import { OrderListComponent } from "./components/order-list/order-list.component";
import { OrderDetailComponent } from "./components/order-detail/order-detail.component";
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path: "", component: UserListComponent},
  {path: "users", component: UserListComponent},
  {path: "user-detail", component: UserDetailComponent},
  {path: "orders", component: OrderListComponent},
  {path: "order-detail", component: OrderDetailComponent},
  {path: "contact", component: ContactComponent},
  {path: "product", component: ProductListComponent},
  {path: "product-detail/:id", component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
