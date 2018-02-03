import {Injectable} from '@angular/core';
import {IAppState} from '../../interfaces/app-state.interface';
import {Store} from '@ngrx/store';
import * as jsonData from './data.json';
import {loadResultPropertiesAction} from '../../store/actions/result-properties-action.creator';
import {loadSavedPropertiesAction} from '../../store/actions/saved-properties-action.creator';

@Injectable()
export class DataService {

  private _mockDataset = <any>jsonData;

  constructor(private _store: Store<IAppState>) {
  }

  loadData(): void {
    this._store.dispatch(loadResultPropertiesAction(this._mockDataset.results));
    this._store.dispatch(loadSavedPropertiesAction(this._mockDataset.saved));
  }

}
