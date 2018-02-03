import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {PropertyListComponent} from '../property-list/property-list.component';
import {BusinessFacadeService} from '../../services/business-facade/business-facade.service';
import {DataService} from '../../services/data/data.service';
import {StoreModule} from '@ngrx/store';
import {savedPropertyReducer} from '../../store/reducers/saved-properties.reducer';
import {resultPropertyReducer} from '../../store/reducers/result-properties.reducer';
import {PropertyComponent} from '../property/property.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent, PropertyListComponent, PropertyComponent],
      providers: [BusinessFacadeService, DataService],
      imports: [
        StoreModule.forRoot({resultProperties: resultPropertyReducer, savedProperties: savedPropertyReducer})
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
