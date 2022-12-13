import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "./components/user-list/user-list.component";
import {UserDetailComponent} from "./components/user-detail/user-detail.component";

const routes: Routes = [
  {path: "", component: UserListComponent},
  {path: "users", component:UserListComponent},
  {path: "user-detail", component:UserDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
