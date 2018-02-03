import {IAction} from '../../interfaces/action.interface';
import {IProperty} from '../../interfaces/property.interface';
import {RESULT_PROPERTIES_ACTIONS} from '../../constants/result-properties.actions';

export function loadResultPropertiesAction(properties: IProperty[]): IAction {
  return {
    type: RESULT_PROPERTIES_ACTIONS.LOAD,
    payload: properties
  };
}
