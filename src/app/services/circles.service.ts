import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Circle } from '../models/circle';

@Injectable({
  providedIn: 'root'
})
export class CirclesService {

  data: Circle[] = [
    {id: 1, name: "Windsor", no: 301, meetingWeek:"2", meetingDay:"Monday", address:"Datchet Golf Club, Buccleuch Road,Datchet, Berkshire, SL3 9BP"},
    {id: 2, name: "Osterley & District", no: 355, meetingWeek:"3", meetingDay:"Wednesday", address:"Hounslow Conservative Club, Gresham Rd, HOUNSLOW, TW3 4BX"},
    {id: 3, name: "Woking & District", no: 135, meetingWeek:"2", meetingDay:"Thursday", address:"Function Room, St Dunstan's Catholic Church, Shaftesbury Road, WOKING, Surrey, GU22 7DT"},
    {id: 4, name: "Richmond", no: 90, meetingWeek:"3", meetingDay:"Tuesday", address:"The Lensbury Club, Broom Road. TEDDINGTON, Middlesex, TW11 9NU"},
    {id: 5, name: "Harrow", no: 85, meetingWeek:"3", meetingDay:"Monday", address:"Grims Dyke Golf Club, Oxhey Lane, Hatch End, PINNER, Middlesex, HA5 4AL"}
  ];


  constructor() { }

  public getCircles(): Observable<Circle[]> {
    return of(this.data);
  }

  public getCircleById(circleId): Observable<Circle> {
    let found = this.data.filter(x=>x.id==circleId);
    return of(found[0]);
  }

}
