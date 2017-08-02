import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';

@Component({
  selector: 'app-list',
  template: `
    <ul>
      <li *ngFor="let course of courses">
      <a [routerLink]="['/courses/list/details',course.id]">{{course.name}}</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  courses:Array<Course>=[];
  constructor(private courseService:CourseService) { }

  ngOnInit() {
    this.courses=this.courseService.getCourses();
  }

}
