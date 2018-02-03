import { Injectable } from '@angular/core';
import {IProperty} from '../../interfaces/property.interface';
import {Store} from '@ngrx/store';
import {IAppState, selectSavedProperties} from '../../interfaces/app-state.interface';
import {removeSavedPropertyAction, savePropertyAction} from '../../store/actions/saved-properties-action.creator';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BusinessFacadeService {

  savedProperties: Observable<IProperty[]>;

  constructor(private _store: Store<IAppState>) {
    this.savedProperties = this._store.select(selectSavedProperties);
  }

  saveProperty(property: IProperty): void {
    this._store.dispatch(savePropertyAction(property));
  }

  removeSavedProperty(propertyId: number): void {
    this._store.dispatch(removeSavedPropertyAction(propertyId));
  }

}
