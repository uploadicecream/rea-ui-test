import {loadSavedPropertiesAction, removeSavedPropertyAction, savePropertyAction} from './saved-properties-action.creator';
import {SAVED_PROPERTIES_ACTIONS} from '../../constants/saved-properties.actions';
import {createProperty} from '../../spec/property.helpers.spec';

describe('Saved Properties Action Creator', () => {

  it('should create correct "Save Property" action', () => {
    const payload = createProperty(1);
    const action = savePropertyAction(payload);

    expect(action.type).toBe(SAVED_PROPERTIES_ACTIONS.ADD);
    expect(action.payload).toBe(payload);
  });

  it('should create correct "Remove Property" action', () => {
    const payload = 1;
    const action = removeSavedPropertyAction(payload);

    expect(action.type).toBe(SAVED_PROPERTIES_ACTIONS.REMOVE);
    expect(action.payload).toBe(payload);
  });

  it('should create correct "Load Properties" action', () => {
    const payload = [createProperty(1), createProperty(2)];
    const action = loadSavedPropertiesAction(payload);

    expect(action.type).toBe(SAVED_PROPERTIES_ACTIONS.LOAD);
    expect(action.payload).toBe(payload);
  });

});
