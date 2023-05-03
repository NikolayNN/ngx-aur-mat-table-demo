import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsBeforeComponent } from './actions-before.component';

describe('ActionsBeforeComponent', () => {
  let component: ActionsBeforeComponent;
  let fixture: ComponentFixture<ActionsBeforeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsBeforeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsBeforeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
