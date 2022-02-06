import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from '../../models/user.model';
import { Contact } from '../../models/contact.model';
import { userService } from 'src/app/services/user.service';
import { UserMsgService } from '../../services/user-msg-service.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact;

  user: User;
  amount: number;
  subscription: Subscription;

  constructor(
    private userService: userService,
    private userMsgService: UserMsgService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.userService.user$.subscribe(
      (user) => (this.user = user)
    );
  }

  onTransferCoins(): void {
    if (this.amount > this.user.coins) {
      confirm("you can't do it");
      return;
    }

    this.userService.addMove(this.contact, this.amount);
    this.userMsgService.setUserMsg(
      `You transferred ${this.amount} coins to ${this.contact.name}`
    );
    // this.router.navigateByUrl('');
  }
}
