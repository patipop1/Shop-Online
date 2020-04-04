import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellInitComponent } from './sell-init.component';

describe('SellInitComponent', () => {
  let component: SellInitComponent;
  let fixture: ComponentFixture<SellInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
