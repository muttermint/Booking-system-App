import { Injectable } from '@angular/core';
import { Event } from '../models/event';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  data: Event[] = [
    {id: 1, circleId: 1, whereType: "usual",	whoStag: true,  whoLady: false, whoClergy: false, what:"16th meeting", when:new Date("3/9/2020"), where:"", why:""},
    {id: 2, circleId: 1, whereType: "usual",	whoStag: true,  whoLady: true, whoClergy: false,  what:"17th meeting", when:new Date("4/13/2020"), where:"", why:""},
    {id: 3, circleId: 1, whereType: "usual",	whoStag: true,  whoLady: false, whoClergy: true,  what:"18th meeting", when:new Date("5/11/2020"), where:"", why:""},
    {id: 4, circleId: 1, whereType: "",	whoStag: true,  whoLady: true, whoClergy: true,  what:"19th meeting", when:new Date("3/23/2020"), where:"123 Somewhere Else Road", why:""},
    {id: 5, circleId: 1, whereType: "usual",	whoStag: true,  whoLady: false, whoClergy: false,  what:"20th meeting", when:new Date("3/23/2020"), where:"", why:""},
    {id: 4, circleId: 1, whereType: "usual",	whoStag: true,  whoLady: false, whoClergy: false,  what:"21st meeting", when:new Date("3/23/2020"), where:"", why:""},
    {id: 5, circleId: 2, whereType: "usual",	whoStag: true,  whoLady: false, whoClergy: false,  what:"22nd meeting", when:new Date("3/23/2020"), where:"", why:""},
    {id: 6, circleId: 2, whereType: "usual",	whoStag: true,  whoLady: true, whoClergy: false,  what:"23rd meeting", when:new Date("7/23/2020"), where:"", why:""},
    {id: 7, circleId: 2, whereType: "usual",	whoStag: true,  whoLady: false, whoClergy: false,  what:"24th meeting", when:new Date("7/23/2020"), where:"", why:""},
    {id: 8, circleId: 2, whereType: "usual",	whoStag: true,  whoLady: false, whoClergy: true,  what:"256th meeting", when:new Date("7/23/2020"), where:"", why:""},
    {id: 9, circleId: 3, whereType: "usual",	whoStag: true,  whoLady: false, whoClergy: false,  what:"26th meeting", when:new Date("7/23/2020"), where:"", why:""},
    {id: 10, circleId: 3, whereType: "usual", whoStag: true,  whoLady: false, whoClergy: false,  what:"27th meeting", when:new Date("7/23/2020"), where:"", why:""},
    {id: 11, circleId: 4, whereType: "usual", whoStag: true,  whoLady: true, whoClergy: false,  what:"28th meeting", when:new Date("7/23/2020"), where:"", why:""},
    {id: 12, circleId: 4, whereType: "usual", whoStag: true,  whoLady: false, whoClergy: false,  what:"29th meeting", when:new Date("7/23/2020"), where:"", why:""},
    {id: 13, circleId: 4, whereType: "usual", whoStag: true,  whoLady: false, whoClergy: false,  what:"30th meeting", when:new Date("7/23/2020"), where:"", why:""},
    {id: 14, circleId: 5, whereType: "usual", whoStag: true,  whoLady: false, whoClergy: false,  what:"31st meeting", when:new Date("7/23/2020"), where:"", why:""},
    {id: 15, circleId: 5, whereType: "usual", whoStag: true,  whoLady: false, whoClergy: false,  what:"32nd meeting", when:new Date("7/23/2020"), where:"", why:""},
     {id: 16, circleId: 5, whereType: "usual", whoStag: true,  whoLady: false, whoClergy: false,  what:"33rd meeting", when:new Date("7/23/2020"), where:"", why:""},
    {id: 17, circleId: 5, whereType: "usual", whoStag: true,  whoLady: false, whoClergy: false,  what:"34th meeting", when:new Date("7/23/2020"), where:"", why:""},
    {id: 18, circleId: 5, whereType: "usual", whoStag: true,  whoLady: false, whoClergy: false,  what:"356th meeting", when:new Date("7/23/2020"), where:"", why:""},
   ];

   eventSubject: Subject<Event> = new Subject();
   nextEventSubject: Subject<Event> = new Subject();

  constructor() { }
  
  getEventsByCircleId(circleId: number): Observable<Event[]> {
    let found = this.data.filter(x=>x.circleId==circleId);
    this.updateNextEvent(found[0]);
    return of(found);
  }

  updateSelectedEvent(selectedEvent: Event){
    this.eventSubject.next(selectedEvent);
  }

  updateNextEvent(event: Event){
    this.nextEventSubject.next(event);
  }

  getEventSubject(): Observable<Event>{
    return this.eventSubject;
  }

  getNextEventSubject(): Observable<Event>{
    return this.nextEventSubject;
  }

}
