import { RouterModule } from '@angular/router';
import { AuthorPageComponent } from './authorpage.component';
import { AuthorListComponent } from './authorlist.component';
import { AuthorDetailsComponent } from './authordetails.component';
import { AuthorformComponent } from './authorform.component';

export const AUTHOR_ROUTES = RouterModule.forChild([
    { path:'', component:AuthorPageComponent },
    { path:'', component:AuthorPageComponent, children:[
        { path:'form', component:AuthorformComponent},
        { path:'form/:authorId', component:AuthorformComponent},
        { path:'list', component:AuthorListComponent},
      //  { path:'list', component:AuthorListComponent, children:[
      //  { path:'authordetails/:authorId', component:AuthorDetailsComponent}
    ]}
  //  ]}
]);