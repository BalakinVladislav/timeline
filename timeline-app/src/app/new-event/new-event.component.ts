import { Component, OnInit } from '@angular/core';
import { News } from '../models/news.model';
import { Transaction } from '../models/transaction.model';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.sass']
})
export class NewEventComponent implements OnInit {
  constructor(private service: EventsService, private router: Router) { }

  public timelineEvents;
  type: String = 'News';
  types: Array<string> = ['Transaction', 'News'];

  model: any = new News(1, '', '', '', '', false);

  submitted = false;

  randomHash(): string { return Math.random().toString(36).substr(2, 9); }

  onSubmit() { this.submitted = true; }

  newTransaction(): void {
    const transaction = this.model;
    this.service.addEvent(new Transaction( this.randomHash(),
      transaction.amount, transaction.value, transaction.person,
      transaction.description, transaction.result, transaction.date, 'Transaction'));
    this.router.navigate(['']);
  }

  newNews(): void {
    const news = this.model;
    this.service.addEvent(new News(this.randomHash(),
      news.header, news.description, news.date, 'News', false));
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
