import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courselist',
  template: `
     <h1>Courses</h1>
    <div class="panel panel-modest">
    <div class="panel panel-heading">Courses</div>
    <div class="panel-body">
      <button type="button" class="btn btn-primary" (click)="add()">Add</button>
    </div>
    <!-- Table -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Course Id</th>
          <th>Course Name</th>
          <th>Course Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      <tr *ngFor="let course of courses"> 
        <td>{{course.courseId}}</td>
        <td><a [routerLink]="['/coursedetails',course.courseId]">{{course.courseName}}</a></td>
        <td><a [routerLink]="['/coursedetails',course.courseId]">{{course.courseDescription}}</a></td>  
        <td>
          <button type="button" class="btn btn-default btn-sm" (click)="edit(course.courseId)">Edit</button>
          <button type="button" class="btn btn-default btn-sm" (click)="delete(course)">Delete</button> 
        </td>
      </tr>
      </tbody>
    </table>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class CourseListComponent implements OnInit {
  courses:Array<Course>=[];
  constructor(private courseService:CourseService, private router:Router) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe( response => {
      this.courses=response.json();
    },error => console.log(error.json()));
  }

  edit(courseId:number){
    this.router.navigate(['courses/form',courseId]);
  }

  delete(course:Course){
    this.courseService.deleteCourse(course.courseId).subscribe(response => {
      let index=this.courses.indexOf(course);
      this.courses.splice(index,1);
    },error => console.log(error.json()));
  }

  add(){
    this.router.navigate(['courses/form']);
  }
}
