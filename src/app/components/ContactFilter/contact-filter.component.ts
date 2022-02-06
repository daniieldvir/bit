import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactFilter } from '../../models/contact-filter.model';
// import { ContactService } from '../../services/contact.service';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss'],
})
export class ContactFilterComponent implements OnInit {
  @Output() onFilter = new EventEmitter<KeyboardEvent>();

  constructor() {}
  ngOnInit(): void {}

  onFilterChange(event) {
    console.log('event filter', event.target.value);

    this.onFilter.emit(event);
  }
}
