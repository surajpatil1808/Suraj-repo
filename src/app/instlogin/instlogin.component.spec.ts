import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstloginComponent } from './instlogin.component';

describe('InstloginComponent', () => {
  let component: InstloginComponent;
  let fixture: ComponentFixture<InstloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
