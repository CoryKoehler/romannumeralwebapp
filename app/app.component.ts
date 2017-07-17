import { Component } from '@angular/core';

export class Converter  {
  
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div>
      <label>Enter a Number or Roman Numeral: </label>
      <input [(ngModel)]="todo" placeholder="value">
    </div>
    `
})
export class AppComponent {
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/