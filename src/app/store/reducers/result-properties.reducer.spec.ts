import {IAction} from '../../interfaces/action.interface';
import {resultPropertyReducer} from './result-properties.reducer';
import {loadResultPropertiesAction} from '../actions/result-properties-action.creator';

describe('Result Property Reducer', () => {

  it('should return initial state if unknown action', () => {
    const initialState = [];
    const action = <IAction>{ type: 'not a known action', payload: null };

    const result = resultPropertyReducer(initialState, action);

    expect(result).toBe(initialState);
  });

  it('should return action instance when properties loaded', () => {
    const initialState = [];
    const properties = [{ id: 1 }, { id: 2 }];
    const action = loadResultPropertiesAction(properties);

    const result = resultPropertyReducer(initialState, action);

    expect(result).toBe(properties);
  });

});
