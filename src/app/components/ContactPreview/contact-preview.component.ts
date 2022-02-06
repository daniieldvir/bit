import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent implements OnInit {
  @Input() contact: Contact;
  @Output() onSelect = new EventEmitter<string>();
  @Output() onDelete = new EventEmitter<string>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSelectedContacts() {
    this.onSelect.emit(this.contact._id);
    this.router.navigateByUrl(`details/${this.contact._id}`);
  }
}
