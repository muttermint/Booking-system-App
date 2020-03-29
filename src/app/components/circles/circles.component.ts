import { Component, OnInit } from '@angular/core';
import { CirclesService } from 'src/app/services/circles.service';
import { Circle } from 'src/app/models/circle';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent implements OnInit {

  constructor(private circlesService: CirclesService) { }

  circles: Circle[] = [];
  selectedCircle: Circle = null;

  ngOnInit() {
    this.getCircles();
  }

  getCircles(){
    this.circlesService.getCircles().subscribe(data => {
      this.circles = data;
    });
  }

  onCircleClick(circle: Circle){
    this.selectedCircle = circle;
  }
}
