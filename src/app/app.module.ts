import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InbuiltComponent } from './inbuilt/inbuilt.component';
import { TablepipePipe } from './tablepipe.pipe';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [
    AppComponent,
    InbuiltComponent,
    TablepipePipe,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
