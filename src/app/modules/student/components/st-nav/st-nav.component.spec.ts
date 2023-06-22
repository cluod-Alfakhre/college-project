import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StNavComponent } from './st-nav.component';

describe('StNavComponent', () => {
  let component: StNavComponent;
  let fixture: ComponentFixture<StNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
