import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListComponent } from './property-list.component';
import {PropertyComponent} from '../property/property.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {createProperty} from '../../spec/property.helpers.spec';

describe('PropertyListComponent', () => {
  let component: PropertyListComponent;
  let fixture: ComponentFixture<PropertyListComponent>;

  let headingElement: DebugElement;

  // DYNAMIC ELEMENTS
  function getPropertyElements(): DebugElement[] {
    return fixture.debugElement.queryAll(By.css('.property-list-item'));
  }

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

    headingElement = fixture.debugElement.query(By.css('.property-list-heading'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set correct heading', () => {
    const heading = 'Title';
    component.heading = heading;
    fixture.detectChanges();

    expect(headingElement.nativeElement.innerText).toBe(heading);
  });

  it('should render correct number of properties', () => {
    const properties = [createProperty(1), createProperty(2), createProperty(3)];
    component.properties = properties;
    fixture.detectChanges();

    expect(getPropertyElements().length).toBe(properties.length);
  });
});
