import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {PropertyComponent} from './property.component';
import {createProperty, createPropertyWithOptions} from '../../spec/property.helpers.spec';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {IPropertyBrandingColors} from '../../interfaces/property-branding-colors.interface';
import {IProperty} from '../../interfaces/property.interface';

describe('PropertyComponent', () => {
  let component: PropertyComponent;
  let fixture: ComponentFixture<PropertyComponent>;

  let priceElement: DebugElement;
  let mainImageElement: DebugElement;
  let logoImageElement: DebugElement;
  let headerElement: DebugElement;

  // DYNAMIC ELEMENTS
  function getAddButton(): DebugElement {
    return fixture.debugElement.query(By.css('.property-action-group .button--add'));
  }

  function getRemoveButton(): DebugElement {
    return fixture.debugElement.query(By.css('.property-action-group .button--remove'));
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyComponent);
    component = fixture.componentInstance;
    component.property = createProperty(1);
    fixture.detectChanges();

    priceElement = fixture.debugElement.query(By.css('p.property-footer-price'));
    mainImageElement = fixture.debugElement.query(By.css('img.property-main-image'));
    logoImageElement = fixture.debugElement.query(By.css('img.property-logo-image'));
    headerElement = fixture.debugElement.query(By.css('.property-header'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set correct property attributes', () => {
    const property = createPropertyWithOptions(
      1,
      '$100,000',
      'http://test.com/main-image.png',
      'http://test.com/logo-image',
      '#F80'
    );

    component.property = property;
    fixture.detectChanges();

    expect(priceElement.nativeElement.innerText).toBe(property.price);
    expect(mainImageElement.nativeElement.src).toBe(property.mainImage);
    expect(logoImageElement.nativeElement.src).toBe(property.agency.logo);
    expect(headerElement.nativeElement.style.backgroundColor).toBe('rgb(255, 136, 0)');
  });

  it('should emit property in event when add button clicked', () => {
    const property = createProperty(1);
    component.property = property;
    component.allowSave = true;
    fixture.detectChanges();

    let emittedProperty: IProperty;
    component.propertySaved.subscribe(p => emittedProperty = p);
    getAddButton().triggerEventHandler('click', null);

    expect(emittedProperty).toBe(property);
  });

  it('should emit property id in event when remove button clicked', () => {
    const property = createProperty(1);
    component.property = property;
    component.allowRemove = true;
    fixture.detectChanges();

    let emittedPropertyId: number;
    component.propertyRemoved.subscribe(id => emittedPropertyId = id);
    getRemoveButton().triggerEventHandler('click', null);

    expect(emittedPropertyId).toBe(property.id);
  });

  it('should show add/remove buttons if enabled', () => {
    component.allowSave = true;
    component.allowRemove = true;
    fixture.detectChanges();

    expect(getAddButton()).not.toBeNull();
    expect(getRemoveButton()).not.toBeNull();
  });

  it('should not show add/remove button if disabled', () => {
    component.allowSave = false;
    component.allowRemove = false;
    fixture.detectChanges();

    expect(getAddButton()).toBeNull();
    expect(getRemoveButton()).toBeNull();
  });
});
