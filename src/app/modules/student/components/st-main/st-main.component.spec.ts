import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StMainComponent } from './st-main.component';

describe('StMainComponent', () => {
  let component: StMainComponent;
  let fixture: ComponentFixture<StMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
