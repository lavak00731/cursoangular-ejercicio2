import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopledetailComponent } from './peopledetail.component';

describe('PeopledetailComponent', () => {
  let component: PeopledetailComponent;
  let fixture: ComponentFixture<PeopledetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopledetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopledetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
