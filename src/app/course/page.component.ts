import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <h1>Courses</h1>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
