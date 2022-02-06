import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { userService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  @Input() contactId: string;

  // @Output() onBack = new EventEmitter();

  subscription: Subscription;
  contact: Contact;
  user: User;

  constructor(
    private ContactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: userService
  ) {}

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data.subscribe((data) => {
      this.contact = data.contact;
    });
    this.subscription = this.userService.user$.subscribe((user) => {
      this.user = user;
      console.log(user);
    });
    // this.subscription = this.route.data.subscribe((data) => {
    //   this.user = data.user;
    //   console.log(data);
    // });
  }

  onBack() {
    this.router.navigateByUrl('contact');
  }
}
