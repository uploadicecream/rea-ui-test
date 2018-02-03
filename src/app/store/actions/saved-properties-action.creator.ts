import {IAction} from '../../interfaces/action.interface';
import {IProperty} from '../../interfaces/property.interface';
import {SAVED_PROPERTIES_ACTIONS} from '../../constants/saved-properties.actions';

export function savePropertyAction(property: IProperty): IAction {
  return {
    type: SAVED_PROPERTIES_ACTIONS.ADD,
    payload: property
  };
}

export function removeSavedPropertyAction(propertyId: number): IAction {
  return {
    type: SAVED_PROPERTIES_ACTIONS.REMOVE,
    payload: propertyId
  };
}
