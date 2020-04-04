import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiffLinkComponent } from './liff-link.component';

describe('LiffLinkComponent', () => {
  let component: LiffLinkComponent;
  let fixture: ComponentFixture<LiffLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiffLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiffLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
