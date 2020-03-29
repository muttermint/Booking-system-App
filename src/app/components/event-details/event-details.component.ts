import { Component, OnInit, Input } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventsService } from 'src/app/services/events.service';
import { CirclesService } from 'src/app/services/circles.service';
import { Circle } from 'src/app/models/circle';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: Event;
  circle: Circle;
  whoString: string;
  displayAddress: string;

  constructor(private eventsService: EventsService, private circlesService: CirclesService) { }

  ngOnInit(): void {
    this.eventsService.getEventSubject().subscribe(eventResult=>{

      this.circlesService.getCircleById(eventResult.circleId).subscribe(circleResult=>{
        this.circle = circleResult;
        this.event = eventResult;
        this.getWhoString();
        this.getAddress();
      });
    });
  }

  getWhoString(){
    this.whoString = "Brothers only";
    if (this.event.whoLady && this.event.whoClergy) this.whoString = `Ladies & clergy night`;
    else if (this.event.whoLady) this.whoString = `Ladies night`;
    else if (this.event.whoClergy) this.whoString = `Clergy night`;
  }

  getAddress() {
    this.displayAddress = this.circle.address;
    if (this.event.whereType!="usual") this.displayAddress = this.event.where;
  }


}
