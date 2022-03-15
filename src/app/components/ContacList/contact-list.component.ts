import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];
  @Output() onSelect = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}