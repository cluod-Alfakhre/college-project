import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StProfileComponent } from './st-profile.component';

describe('ProfileComponent', () => {
  let component: StProfileComponent;
  let fixture: ComponentFixture<StProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
