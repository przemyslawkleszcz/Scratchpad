import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsExercisesReferenceVariableComponent } from './events-exercises-reference-variable.component';

describe('EventsExercisesReferenceVariableComponent', () => {
  let component: EventsExercisesReferenceVariableComponent;
  let fixture: ComponentFixture<EventsExercisesReferenceVariableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsExercisesReferenceVariableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsExercisesReferenceVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
