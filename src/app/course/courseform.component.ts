import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CourseService } from './course.service';
import { ActivatedRoute, Router } from '@angular/router'; 


@Component({
  selector: 'app-courseform',
  templateUrl: './courseform.component.html',
  styles: []
})
export class CourseformComponent implements OnInit, OnDestroy {

  courseForm:FormGroup;
  courseIdSubscription:Subscription;
  courseId:number;

  constructor(private courseService:CourseService, private fb:FormBuilder,
              private activatedRoute:ActivatedRoute, private router:Router ) { }

  ngOnInit() {
    this.courseForm = this.fb.group({
      courseName: this.fb.control('',[Validators.required]),
      courseDescription: this.fb.control('',[Validators.required])
    })

    this.courseIdSubscription = this.activatedRoute.params.subscribe((params)=>{
      if(params['courseId'] !== undefined){
        this.courseService.getCourse(parseInt(params['courseId'])).subscribe(response =>{
          let course=response.json();
          this.courseId=course.courseId;
          this.courseForm.setValue({
            courseName:course.courseName,
            courseDescription:course.courseDescription
          });
        },error=>console.log(error.json()));
      }
    });
  }

  ngOnDestroy(){
    this.courseIdSubscription.unsubscribe();
  }
  get CourseName(){
    return this.courseForm.get('courseName');
  }
  get CourseDescription(){
    return this.courseForm.get('courseDescription');
  }
  handleFormSubmit(){
    console.log(this.courseForm.value);
    this.courseForm.value.courseId=this.courseId;
    this.courseService.saveCourse(this.courseForm.value).subscribe(
      response => {
        console.log(response.json());
        this.courseForm.reset();
        this.router.navigate(['/courses/list']);
      },error => console.log(error.json()));
  } 
}
