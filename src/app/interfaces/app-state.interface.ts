import {IProperty} from './property.interface';

export interface IAppState {
  resultProperties: IProperty[];
  savedProperties: IProperty[];
}

export const selectResultProperties = (state: IAppState) => state.resultProperties;
export const selectSavedProperties = (state: IAppState) => state.savedProperties;
