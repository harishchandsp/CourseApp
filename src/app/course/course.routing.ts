import { RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import { ListComponent } from './list.component';
import { DetailsComponent } from './details.component';

export const COURSE_ROUTES = RouterModule.forChild([
    { path:'', component:PageComponent },
    { path:'', component:PageComponent, children:[
        { path:'list', component:ListComponent},
        { path:'list', component:ListComponent, children:[
        { path:'details/:courseId', component:DetailsComponent}
    ]}
    ]}
]);