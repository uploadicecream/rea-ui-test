import {createProperty} from '../../spec/property.helpers.spec';
import {loadResultPropertiesAction} from './result-properties-action.creator';
import {RESULT_PROPERTIES_ACTIONS} from '../../constants/result-properties.actions';

describe('Result Properties Action Creator', () => {

  it('should create correct "Load Properties" action', () => {
    const payload = [createProperty(1), createProperty(2)];
    const action = loadResultPropertiesAction(payload);

    expect(action.type).toBe(RESULT_PROPERTIES_ACTIONS.LOAD);
    expect(action.payload).toBe(payload);
  });
});
