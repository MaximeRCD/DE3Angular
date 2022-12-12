import {Component,Input, OnInit} from '@angular/core';
import {User} from "../../service/userSchema";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  userDetail!: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userDetail = this.userService.savedUser;
  }

}
