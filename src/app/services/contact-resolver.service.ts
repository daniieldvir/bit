import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Contact } from '../models/contact.model';
import { ContactService } from '../services/contact.service';

@Injectable({
  providedIn: 'root',
})
export class ContactResolverService implements Resolve<Promise<Contact>> {
  constructor(private ContactService: ContactService) {}

  async resolve(route: ActivatedRouteSnapshot) {
    const id = route.params.id;
    const contact = await this.ContactService.getContactById(id).toPromise();
    return contact;
  }
}
