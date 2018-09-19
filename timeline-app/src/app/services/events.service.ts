import { Injectable} from '@angular/core';
import { News} from '../models/news.model';
import { Transaction} from '../models/transaction.model';

@Injectable()
export class EventsService {
  timelineEvent: Array<Transaction | News> = [new News(1, 'qwe', 'wer', '2018-09-18', 'News', false),
    new Transaction(2, '20000',
      'rubles', 'john smith', 'sdfasdf asdf sf asd', '-', '2018-09-17', 'Transaction')];

  getAll() {
    return this.timelineEvent;
  }

  getById(id) {
    return this.timelineEvent.find(i => i.id == id);
  }

  addEvent(event) {
    this.timelineEvent.push(event);
  }

  deleteEvent(event) {
    this.timelineEvent.splice(this.timelineEvent.indexOf(event), 1);
  }

  viewNews(id) {
    this.getById(id).viewed = true;
  }
}
