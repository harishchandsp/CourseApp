import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  template: `
    <p>
      details Works for course id {{courseId}}
    </p>
  `,
  styles: []
})
export class DetailsComponent implements OnInit, OnDestroy {
  courseId:string;
  courseIdSubscription:Subscription;
  constructor(private ac:ActivatedRoute) {
   // this.courseId=this.ac.snapshot.paramMap.get('courseId');
      this.courseIdSubscription = this.ac.params.subscribe(params =>{this.courseId=params['courseId']})
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.courseIdSubscription.unsubscribe();
  }

}
