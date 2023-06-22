import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleSubjectsComponent } from './schedule-subjects.component';

describe('ScheduleSubjectsComponent', () => {
  let component: ScheduleSubjectsComponent;
  let fixture: ComponentFixture<ScheduleSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleSubjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
