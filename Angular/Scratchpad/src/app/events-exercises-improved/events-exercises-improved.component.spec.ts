import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsExercisesImprovedComponent } from './events-exercises-improved.component';

describe('EventsExercisesImprovedComponent', () => {
  let component: EventsExercisesImprovedComponent;
  let fixture: ComponentFixture<EventsExercisesImprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsExercisesImprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsExercisesImprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
