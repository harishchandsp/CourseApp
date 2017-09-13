import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './courselist.component';
import { CoursePageComponent } from './coursepage.component';
import { CourseDetailsComponent } from './coursedetails.component';
import { COURSE_ROUTES } from './course.routing';
import { CourseService } from './course.service';
import { CourseformComponent } from './courseform.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    COURSE_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports:[ CoursePageComponent ],
  declarations: [CourseListComponent, CoursePageComponent, CourseDetailsComponent, CourseformComponent],
  providers:[CourseService]
})
export class CourseModule { }
