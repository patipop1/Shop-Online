import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RichmenuComponent } from './richmenu.component';

describe('RichmenuComponent', () => {
  let component: RichmenuComponent;
  let fixture: ComponentFixture<RichmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RichmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RichmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
