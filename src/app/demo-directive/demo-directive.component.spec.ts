import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDirectiveComponent } from './demo-directive.component';

describe('DemoDirectiveComponent', () => {
  let component: DemoDirectiveComponent;
  let fixture: ComponentFixture<DemoDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoDirectiveComponent]
    });
    fixture = TestBed.createComponent(DemoDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
