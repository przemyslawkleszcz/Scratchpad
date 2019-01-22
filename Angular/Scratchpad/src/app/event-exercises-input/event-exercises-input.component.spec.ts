import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventExercisesInputComponent } from './event-exercises-input.component';

describe('EventExercisesInputComponent', () => {
  let component: EventExercisesInputComponent;
  let fixture: ComponentFixture<EventExercisesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventExercisesInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventExercisesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
