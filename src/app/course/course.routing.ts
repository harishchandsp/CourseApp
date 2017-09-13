import { RouterModule } from '@angular/router';
import { CoursePageComponent } from './coursepage.component';
import { CourseListComponent } from './courselist.component';
import { CourseDetailsComponent } from './coursedetails.component';
import { CourseformComponent } from './courseform.component';

export const COURSE_ROUTES = RouterModule.forChild([
    { path:'', component:CoursePageComponent },
    { path:'', component:CoursePageComponent, children:[
        { path:'form', component:CourseformComponent},
        { path:'form/:courseId', component:CourseformComponent},
        { path:'list', component:CourseListComponent},
      //  { path:'list', component:CourseListComponent, children:[
        //{ path:'coursedetails/:courseId', component:CourseDetailsComponent}
    ]}
 //   ]}
]);