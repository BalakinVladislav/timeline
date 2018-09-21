import { Component, OnInit } from '@angular/core';
import { News } from '../models/news.model';
import { Transaction } from '../models/transaction.model';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})
export class EventsComponent implements OnInit {
  private timelineEvents: Array<Transaction | News>;
  public dateSort = 'asc';
  public typeFilter  = '';

  constructor(private service: EventsService, private router: Router) { }
  ngOnInit() {
    this.timelineEvents = this.service.getAll();
  }

  SortByDate(): void {
    this.timelineEvents.sort((a , b) => {
      const firstInSeconds = (new Date(b.date)).getTime();
      const secondInSeconds = (new Date(a.date)).getTime();
      return (this.dateSort === 'asc') ?
        secondInSeconds - firstInSeconds :
        firstInSeconds - secondInSeconds;
    });
  }

  FilterByType(): void {
    if (this.typeFilter === '') {
      this.timelineEvents = this.service.getAll();
    } else {
      this.timelineEvents = this.service.getAll().filter(event => event.type === this.typeFilter);
    }
  }

  showDetails(id: string): void {
    this.router.navigate(['show', id]);
  }

}
