import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routing';
import { NavbarComponent } from './navbar.component';
import { CourseModule } from './course/course.module';
import { AuthorModule } from './author/author.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    FormsModule,
    HttpModule,
    CourseModule,
    AuthorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
