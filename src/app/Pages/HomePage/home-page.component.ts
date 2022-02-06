import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { userService } from '../../services/user.service';
import { bitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  subscription: Subscription;
  user: User;

  btc: any;

  async ngOnInit(): Promise<void> {
    this.userService.getUser().subscribe((user) => {
      console.log(user);

      this.user = user;
    });

    this.bitcoinService.getRate().subscribe((btc) => {
      this.btc = btc;
    });
  }

  constructor(
    private userService: userService,
    private bitcoinService: bitcoinService
  ) {}
}
