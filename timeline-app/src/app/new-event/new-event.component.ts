import { Component, OnInit } from '@angular/core';
import {News} from '../models/news.model';
import {Transaction} from '../models/transaction.model';
import {EventsService} from '../services/events.service';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.sass']
})
export class NewEventComponent implements OnInit {
  constructor(private service: EventsService) { }

  public timelineEvents;
  type: String = 'News';
  types = ['Transaction', 'News'];

  model: any = new News(1, '', '', '', '', false);

  submitted = false;

  onSubmit() { this.submitted = true; }

  newTransaction() {
    this.service.addEvent(new Transaction( Math.random().toString(36).substr(2, 9),
      this.model.amount, this.model.value, this.model.person,
      this.model.description, this.model.result, this.model.date, 'Transaction'));
  }

  newNews() {
    this.service.addEvent(new News(Math.random().toString(36).substr(2, 9),
         this.model.header, this.model.description, this.model.date, 'News', false));
    console.log(this.service.timelineEvent);
  }

  ngOnInit(): void {
  }

}
