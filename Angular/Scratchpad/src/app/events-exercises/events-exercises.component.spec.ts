import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsExercisesComponent } from './events-exercises.component';

describe('EventsExercisesComponent', () => {
  let component: EventsExercisesComponent;
  let fixture: ComponentFixture<EventsExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsExercisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
