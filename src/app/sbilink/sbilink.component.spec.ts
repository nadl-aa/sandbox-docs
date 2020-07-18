import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SbilinkComponent } from './sbilink.component';

describe('SbilinkComponent', () => {
  let component: SbilinkComponent;
  let fixture: ComponentFixture<SbilinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SbilinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbilinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
