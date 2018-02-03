import { Injectable } from '@angular/core';
import {IProperty} from '../../interfaces/property.interface';
import {Store} from '@ngrx/store';
import {IAppState, selectResultProperties, selectSavedProperties} from '../../interfaces/app-state.interface';
import {removeSavedPropertyAction, savePropertyAction} from '../../store/actions/saved-properties-action.creator';
import {Observable} from 'rxjs/Observable';
import {DataService} from '../data/data.service';

@Injectable()
export class BusinessFacadeService {

  resultProperties: Observable<IProperty[]>;
  savedProperties: Observable<IProperty[]>;

  constructor(private _store: Store<IAppState>, private _dataService: DataService) {
    this.resultProperties = this._store.select(selectResultProperties);
    this.savedProperties = this._store.select(selectSavedProperties);
  }

  saveProperty(property: IProperty): void {
    this._store.dispatch(savePropertyAction(property));
  }

  removeSavedProperty(propertyId: number): void {
    this._store.dispatch(removeSavedPropertyAction(propertyId));
  }

  loadData(): void {
    this._dataService.loadData();
  }

}
