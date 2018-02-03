import {IProperty} from './property.interface';

export interface IAppState {
  savedProperties: IProperty[];
}

export const selectSavedProperties = (state: IAppState) => state.savedProperties;
