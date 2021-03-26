import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetracksComponent } from './deletetracks.component';

describe('DeletetracksComponent', () => {
  let component: DeletetracksComponent;
  let fixture: ComponentFixture<DeletetracksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletetracksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
