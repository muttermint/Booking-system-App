import { Component, OnInit, Input } from '@angular/core';
import { Circle } from 'src/app/models/circle';
import { Event } from 'src/app/models/event';
import { ActivatedRoute, Router } from '@angular/router';
import { CirclesService } from 'src/app/services/circles.service';

@Component({
  selector: 'app-main-circle',
  templateUrl: './main-circle.component.html',
  styleUrls: ['./main-circle.component.scss']
})
export class MainCircleComponent implements OnInit {

  //@Input('circle') private selectedCircle: Circle;
  events: Event[] = [];
  selectedEvent: Event;
  selectedCircle: Circle;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private circlesService: CirclesService

  ) { }

  ngOnInit() {
    //let circleId = +this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe(p => {
      this.getCircle(+p.id);
    });


  }

  getCircle(circleId: number){
    this.circlesService.getCircleById(circleId).subscribe(data => {
      this.selectedCircle = data;
    });
  }


}
