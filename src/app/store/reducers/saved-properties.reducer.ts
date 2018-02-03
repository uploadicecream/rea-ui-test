import {IProperty} from '../../interfaces/property.interface';
import {IAction} from '../../interfaces/action.interface';
import {SAVED_PROPERTIES_ACTIONS} from '../../constants/saved-properties.actions';

export function savedPropertyReducer(state: IProperty[] = [], action: IAction) {
  switch (action.type) {
    case SAVED_PROPERTIES_ACTIONS.ADD:
      return [...state, action.payload];

    default:
      return state;
  }
}
