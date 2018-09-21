import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../services/events.service';
import { Transaction } from '../models/transaction.model';
import { News } from '../models/news.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.sass']
})
export class EventDetailComponent implements OnInit {
  event: News | Transaction;
  constructor(private service: EventsService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id: string = this.currentRoute.snapshot.paramMap.get("id");

    this.event = this.service.getById(id);
    console.log(this.event)
  }

  deleteTransaction(event: News | Transaction): void {
    this.service.deleteEvent(event);
    this.router.navigate(['']);
  }

  viewed(event: News | Transaction): void {
    this.service.viewNews(event.id);
    this.router.navigate(['']);
  }

}
