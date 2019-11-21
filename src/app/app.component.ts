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
  addTodo(value){    this.todoArray.push(value)} 
  // deleteItem(){   console.log("delete item")  }
 deleteItem(todo){   for(let i=0 ;i<= this.todoArray.length ;i++){    if(todo== this.todoArray[i]){     this.todoArray.splice(i,1)    }   }  }
// submit Form  todoSubmit(value:any){ console.log(value)  }
// submit Form  todoSubmit(value:any){     if(value!==""){    this.todoArray.push(value.todo)     //this.todoForm.reset()    }else{      alert('Field required **')    }      }

}


