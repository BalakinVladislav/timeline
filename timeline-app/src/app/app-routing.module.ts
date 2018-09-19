import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsComponent} from './events/events.component';
import {NewEventComponent} from './new-event/new-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'new', component: NewEventComponent },
  { path: 'show/:id', component: EventDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
