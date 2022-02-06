import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  contact: Contact;

  constructor(
    private ContactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      console.log('contact', contact);
      console.log('this.route.data', this.route.data);

      this.contact = contact
        ? contact
        : (this.ContactService.getEmptyContacts() as Contact);
    });
  }

  async onSaveContact() {
    // await this.ContactService.saveContact(this.contact).toPromise();
    this.ContactService.saveContact(this.contact);
    this.router.navigateByUrl('contact');
  }

  onBack() {
    this.router.navigateByUrl('contact');
  }
}
