import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StTableComponent } from './st-table.component';

describe('StTableComponent', () => {
  let component: StTableComponent;
  let fixture: ComponentFixture<StTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
