import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { EventsExercisesComponent } from './events-exercises/events-exercises.component';
import { EventsExercisesImprovedComponent } from './events-exercises-improved/events-exercises-improved.component';
import { EventExercisesInputComponent } from './event-exercises-input/event-exercises-input.component';
import { EventsExercisesReferenceVariableComponent } from './events-exercises-reference-variable/events-exercises-reference-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsExercisesComponent,
    EventsExercisesImprovedComponent,
    EventExercisesInputComponent,
    EventsExercisesReferenceVariableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
