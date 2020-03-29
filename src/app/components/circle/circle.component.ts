import { Component, OnInit, Input } from '@angular/core';
import { Circle } from 'src/app/models/circle';
import { Event } from 'src/app/models/event';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  selectedNextEvent: Event;
  @Input('circle') private circle: Circle;

  constructor(private eventsService: EventsService) {
  }

  ngOnInit() {
    this.eventsService.getNextEventSubject().subscribe(data=>{
      this.selectedNextEvent = data;
    });
  }

}
