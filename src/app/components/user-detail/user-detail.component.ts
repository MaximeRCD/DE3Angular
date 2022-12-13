import {Component,Input, OnInit} from '@angular/core';
import {User} from "../../service/userSchema";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  userDetail!: User;

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userDetail = this.userService.savedUser;
  }

  returnToList() {
    this.router.navigate(["/users"])
  }
}
