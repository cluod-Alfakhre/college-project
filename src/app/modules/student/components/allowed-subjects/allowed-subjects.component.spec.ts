import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllowedSubjectsComponent } from './allowed-subjects.component';

describe('AllowedSubjectsComponent', () => {
  let component: AllowedSubjectsComponent;
  let fixture: ComponentFixture<AllowedSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllowedSubjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllowedSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
