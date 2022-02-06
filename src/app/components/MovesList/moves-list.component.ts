import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss'],
})
export class MovesListComponent implements OnInit {
  @Input() contact: Contact;
  @Input() user: User;

  lastTransfers: Array<any>;

  constructor() {}

  ngOnInit(): void {
    this.getLastTransfers(this.user);
  }

  getLastTransfers(user: User): void {
    this.lastTransfers = [];
    this.lastTransfers.push(user.moves);
  }
}
