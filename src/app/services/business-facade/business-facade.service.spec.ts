import { TestBed, inject } from '@angular/core/testing';

import { BusinessFacadeService } from './business-facade.service';
import {StoreModule} from '@ngrx/store';
import {savedPropertyReducer} from '../../store/reducers/saved-properties.reducer';
import {IProperty} from '../../interfaces/property.interface';
import {resultPropertyReducer} from '../../store/reducers/result-properties.reducer';
import {DataService} from '../data/data.service';

describe('BusinessFacadeService', () => {

  let _service: BusinessFacadeService;
  let _resultProperties: IProperty[];
  let _savedProperties: IProperty[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessFacadeService, DataService],
      imports: [
        StoreModule.forRoot({resultProperties: resultPropertyReducer, savedProperties: savedPropertyReducer})
      ]
    });
  });

  beforeEach(inject([BusinessFacadeService], (service: BusinessFacadeService) => {
    _service = service;
    _service.resultProperties.subscribe((properties) => {
      _resultProperties = properties;
    });
    _service.savedProperties.subscribe((properties) => {
      _savedProperties = properties;
    });
  }));

  it('should be created', () => {
    expect(_service).toBeTruthy();
  });

  it('should add property to saved properties list when saved', () => {
    const propertyToSave = <IProperty>{id: 1};

    expect(_savedProperties.length).toBe(0);
    _service.saveProperty(propertyToSave);

    expect(_savedProperties.length).toBe(1);
    expect(_savedProperties[0].id).toBe(propertyToSave.id);
  });

  it('should not duplicate property if saved twice', () => {
    const propertyToSave = <IProperty>{id: 1};

    _service.saveProperty(propertyToSave);
    _service.saveProperty(propertyToSave);

    expect(_savedProperties.length).toBe(1);
    expect(_savedProperties[0].id).toBe(propertyToSave.id);
  });

  it('should remove a saved property', () => {
    const property = <IProperty>{id: 1};

    _service.saveProperty(property);
    expect(_savedProperties.length).toBe(1);
    expect(_savedProperties[0].id).toBe(property.id);

    _service.removeSavedProperty(property.id);
    expect(_savedProperties.length).toBe(0);
  });

  it('should not error if removing a saved property that does not exist', () => {
    _service.removeSavedProperty(666);
    expect(_savedProperties.length).toBe(0);
  });

  it('should load initial test data', () => {
    _service.loadData();
    expect(_resultProperties.length).toBe(3);
    expect(_savedProperties.length).toBe(1);
  });

});
