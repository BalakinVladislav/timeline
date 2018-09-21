import { Injectable } from '@angular/core';
import { News } from '../models/news.model';
import { Transaction } from '../models/transaction.model';

@Injectable()
export class EventsService {
  timelineEvent: Array<Transaction | News> = [new News('1', 'qwe', 'wer', '2018-09-18', 'News', false),
    new Transaction('2', '20000',
      'rubles', 'john smith', 'sdfasdf asdf sf asd', '-', '2018-09-17', 'Transaction')];

  getAll(): Array<Transaction | News> {
    return this.timelineEvent;
  }

  getById(id: string): News | Transaction {
    console.log(id, this.timelineEvent)
    return this.timelineEvent.find(i => i.id === id);
  }

  addEvent(event: News | Transaction): void {
    this.timelineEvent.push(event);
  }

  deleteEvent(event: News | Transaction): void {
    this.timelineEvent.splice(this.timelineEvent.indexOf(event), 1);
  }

  viewNews(id: string): void {
    this.getById(id).viewed = true;
  }
}
