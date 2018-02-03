import {IProperty} from '../../interfaces/property.interface';
import {IAction} from '../../interfaces/action.interface';
import {RESULT_PROPERTIES_ACTIONS} from '../../constants/result-properties.actions';

export function resultPropertyReducer(state: IProperty[] = [], action: IAction) {
  switch (action.type) {
    case RESULT_PROPERTIES_ACTIONS.LOAD:
      return action.payload;

    default:
      return state;
  }
}
