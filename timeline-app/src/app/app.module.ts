import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import {AppRoutingModule} from './app-routing.module';
import { NewEventComponent } from './new-event/new-event.component';
import {FormsModule} from '@angular/forms';
import {EventsService} from './services/events.service';
import { EventDetailComponent } from './event-detail/event-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    NewEventComponent,
    EventDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
