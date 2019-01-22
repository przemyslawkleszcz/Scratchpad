import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsExercisesComponent } from '../events-exercises/events-exercises.component'
import { EventsExercisesImprovedComponent } from '../events-exercises-improved/events-exercises-improved.component'
import { EventExercisesInputComponent } from '../event-exercises-input/event-exercises-input.component'
import { EventsExercisesReferenceVariableComponent } from '../events-exercises-reference-variable/events-exercises-reference-variable.component'

const routes: Routes = [
    {
        path: '',
        component: EventsExercisesComponent,
    },
    {
        path: 'event-exercises-improved',
        component: EventsExercisesImprovedComponent
    },
    {
        path: 'event-exercises-input',
        component: EventExercisesInputComponent
    },
    {
        path: 'event-exercises-reference-variable',
        component: EventsExercisesReferenceVariableComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }