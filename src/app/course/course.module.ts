import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { PageComponent } from './page.component';
import { DetailsComponent } from './details.component';
import { COURSE_ROUTES } from './course.routing';
import { CourseService } from './course.service';

@NgModule({
  imports: [
    CommonModule,
    COURSE_ROUTES
  ],
  declarations: [ListComponent, PageComponent, DetailsComponent],
  providers:[CourseService]
})
export class CourseModule { }
