import {TestBed, inject} from '@angular/core/testing';
import {DataService} from './data.service';
import {IProperty} from '../../interfaces/property.interface';
import {Store, StoreModule} from '@ngrx/store';
import {savedPropertyReducer} from '../../store/reducers/saved-properties.reducer';
import {IAppState, selectResultProperties, selectSavedProperties} from '../../interfaces/app-state.interface';
import {resultPropertyReducer} from '../../store/reducers/result-properties.reducer';

describe('DataService', () => {
  let _service: DataService;
  let _resultProperties: IProperty[];
  let _savedProperties: IProperty[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataService],
      imports: [
        StoreModule.forRoot({resultProperties: resultPropertyReducer, savedProperties: savedPropertyReducer})
      ]
    });
  });

  beforeEach(inject([DataService, Store], (service: DataService, store: Store<IAppState>) => {
    _service = service;
    store.select(selectSavedProperties).subscribe(properties => {
      _savedProperties = properties;
    });
    store.select(selectResultProperties).subscribe(properties => {
      _resultProperties = properties;
    });
  }));

  it('should be created', () => {
    expect(_service).toBeTruthy();
  });

  it('should load json data', () => {
    _service.loadData();
    expect(_resultProperties.length).toBe(3);
    expect(_savedProperties.length).toBe(1);
    // TODO: could validate all properties are as expected but just checking that right amount of properties load is good enough for now
  });
});
