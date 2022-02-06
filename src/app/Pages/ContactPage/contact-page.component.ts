import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { ContactFilter } from '../../models/contact-filter.model';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  contacts: Contact[];
  contacts$: Observable<Contact[]>;
  subscription: Subscription;
  selectedContactsId: string;
  filterBy: ContactFilter = { term: '' };

  ngOnInit(): void {
    this.ContactService.loadContacts();
    this.contacts$ = this.ContactService.contacts$;
    console.log(this.contacts$);
  }

  onFilter(event): void {
    this.filterBy.term = event.target.value;
    this.ContactService.loadContacts(this.filterBy);
  }

  onDeleteContact(contactsId: string) {
    this.ContactService.deleteContact(contactsId);
  }

  constructor(private ContactService: ContactService) {}
}
