import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { userService } from '../../services/user.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent implements OnInit {
  user: User = { name: '', coins: 100, moves: [] };
  constructor(private userService: userService, private router: Router) {}

  ngOnInit(): void {
    // this.user = this.userService.getUser();
    this.user = new User();
  }

  signUp() {
    this.userService.singup(this.user.name);
    this.router.navigateByUrl('');
  }
}
