import { RouterModule } from '@angular/router';

export const APP_ROUTES = RouterModule.forRoot([
    { path: 'courses', loadChildren: 'app/course/course.module#CourseModule'}
    ]);