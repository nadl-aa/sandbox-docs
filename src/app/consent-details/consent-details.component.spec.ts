import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentDetailsComponent } from './consent-details.component';

describe('ConsentDetailsComponent', () => {
  let component: ConsentDetailsComponent;
  let fixture: ComponentFixture<ConsentDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
