import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorListComponent } from './authorlist.component';
import { AuthorPageComponent } from './authorpage.component';
import { AuthorDetailsComponent } from './authordetails.component';
import { AUTHOR_ROUTES } from './author.routing';
import { AuthorService } from './author.service';
import { AuthorformComponent } from './authorform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    AUTHOR_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports:[ AuthorPageComponent ],
  declarations: [AuthorListComponent, AuthorPageComponent, AuthorDetailsComponent, AuthorformComponent],
  providers:[AuthorService]
})
export class AuthorModule { }
