import { Component, OnInit } from '@angular/core';
import {News} from '../models/news.model';
import {Transaction} from '../models/transaction.model';
import {EventsService} from '../services/events.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass']
})
export class EventsComponent implements OnInit {
  private timelineEvents: Array<Transaction | News>;
  private dateSort = 'asc';
  private typeFilter  = '';

  constructor(private service: EventsService, private router: Router) { }
  ngOnInit() {
    this.timelineEvents = this.service.getAll();
  }

  SortByDate() {
    const _self = this;
    this.timelineEvents.sort(function (a , b) {
      const a1 = new Date(b.date);
      const b1 = new Date(a.date);
      return (_self.dateSort === 'asc') ? b1.getTime() - a1.getTime() : a1.getTime() - b1.getTime();
    });
  }

  FilterByType() {
    if (this.typeFilter === '') {this.timelineEvents = this.service.getAll(); } else {
      this.timelineEvents = this.service.getAll().filter(i => i.type === this.typeFilter);
    }
  }

  showDetails(id) {
    this.router.navigate(['show', id]);
  }

}
