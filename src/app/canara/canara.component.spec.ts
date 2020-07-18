import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanaraComponent } from './canara.component';

describe('CanaraComponent', () => {
  let component: CanaraComponent;
  let fixture: ComponentFixture<CanaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
