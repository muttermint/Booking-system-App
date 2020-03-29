import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Circle } from 'src/app/models/circle';
import { Event } from 'src/app/models/event';
import { CirclesService } from 'src/app/services/circles.service';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-circle-events',
  templateUrl: './circle-events.component.html',
  styleUrls: ['./circle-events.component.scss']
})
export class CircleEventsComponent implements OnInit, OnChanges {

  @Input('circle') private circle: Circle;
  events: Event[] = [];
  selectedEvent: Event;

  constructor(private eventsService: EventsService ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    let changedItem = changes['circle'].currentValue;
    if (changedItem){
      this.circle = changedItem;
      this.getEventsByCircleId(this.circle.id);
    }
  }

  getEventsByCircleId(circleId: number){
    this.eventsService.getEventsByCircleId(circleId).subscribe(data => {
      this.events = data;
      if(this.events) this.onClickEvent(this.events[0])
    });
  }

  onClickEvent(circleEvent: Event){
    this.selectedEvent = circleEvent;
    this.eventsService.updateSelectedEvent(this.selectedEvent);
  }

}
