import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListComponent } from './property-list.component';
import {PropertyComponent} from '../property/property.component';

describe('PropertyListComponent', () => {
  let component: PropertyListComponent;
  let fixture: ComponentFixture<PropertyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyListComponent, PropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyListComponent);
    component = fixture.componentInstance;
    component.properties = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
