import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatsComponent } from './meats.component';

describe('MeatsComponent', () => {
  let component: MeatsComponent;
  let fixture: ComponentFixture<MeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
