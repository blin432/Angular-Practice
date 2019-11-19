// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <!-- header -->
//     <app-header></app-header>
//     <!-- routes will be rendered here -->
//     <router-outlet></router-outlet>
//     <!-- footer -->
//     <app-footer></app-footer>
//   `,
//   styles: []
// })
// export class AppComponent {}

export class AppComponent { todoArray=[]
  addTodo(value){    this.todoArray.push(value)} }
