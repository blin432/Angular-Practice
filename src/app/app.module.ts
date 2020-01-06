import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';//had to update
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//added module to get proper animations
import { AppComponent } from './app.component';
import { EditInputComponent } from './edit-input/edit-input.component';
import { AutofocusDirective } from './autofocus.directive';
@NgModule({
  declarations: [
    AppComponent,EditInputComponent, AutofocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





