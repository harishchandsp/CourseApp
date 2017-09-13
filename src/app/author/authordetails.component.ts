import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authordetails',
  template: `
    <p>
      Author Id for the selected author is {{authorId}}
    </p>
  `,
  styles: []
})
export class AuthorDetailsComponent implements OnInit, OnDestroy {
  authorId:string;
  authorIdSubscription:Subscription;
  constructor(private ac:ActivatedRoute) {
   
      this.authorIdSubscription = this.ac.params.subscribe(params =>{this.authorId=params['authorId']})
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.authorIdSubscription.unsubscribe();
  }

}
