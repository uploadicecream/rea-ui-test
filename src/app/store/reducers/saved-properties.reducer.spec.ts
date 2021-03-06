import {savedPropertyReducer} from './saved-properties.reducer';
import {IAction} from '../../interfaces/action.interface';
import {IProperty} from '../../interfaces/property.interface';
import {loadSavedPropertiesAction, removeSavedPropertyAction, savePropertyAction} from '../actions/saved-properties-action.creator';
import {createProperty} from '../../spec/property.helpers.spec';

describe('Saved Property Reducer', () => {

  it('should return initial state if unknown action', () => {
    const initialState = [];
    const action = <IAction>{ type: 'not a known action', payload: null };

    const result = savedPropertyReducer(initialState, action);

    expect(result).toBe(initialState);
  });


  it('should return new state instance with property included when saving a property', () => {
    const initialState = [];
    const propertyToSave = createProperty(1);
    const action = savePropertyAction(propertyToSave);

    const result = savedPropertyReducer(initialState, action);

    expect(result).not.toBe(initialState);
    expect(result.length).toBe(1);
    expect(result[0].id).toBe(propertyToSave.id);
  });

  it('should not save property with the same id twice', () => {
    const existingProperty = createProperty(1);
    const initialState = [existingProperty];
    const propertyToSave = createProperty(1);
    const action = savePropertyAction(propertyToSave);

    const result = savedPropertyReducer(initialState, action);

    expect(result).toBe(initialState);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(existingProperty);
    expect(result[0].id).toBe(existingProperty.id);
  });

  it('should remove an existing saved property and return new instance (only one saved property)', () => {
    const existingProperty = createProperty(1);
    const initialState = [existingProperty];
    const action = removeSavedPropertyAction(existingProperty.id);

    const result = savedPropertyReducer(initialState, action);

    expect(result).not.toBe(initialState);
    expect(result.length).toBe(0);
  });

  it('should remove an existing saved property and return new instance (multiple saved properties)', () => {
    const existingProperty = createProperty(1);
    const initialState = [existingProperty, createProperty(2), createProperty(3)];
    const action = removeSavedPropertyAction(existingProperty.id);

    const result = savedPropertyReducer(initialState, action);

    expect(result).not.toBe(initialState);
    expect(result.length).toBe(2);
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(3);
  });

  it('should return initial state if removing a property that isnt saved', () => {
    const existingProperty = createProperty(1);
    const initialState = [existingProperty];
    const action = removeSavedPropertyAction(4);

    const result = savedPropertyReducer(initialState, action);

    expect(result).toBe(initialState);
    expect(result.length).toBe(1);
  });

  it('should load saved properties', () => {
    const initialState = [];
    const properties = [createProperty(1), createProperty(2)];
    const action = loadSavedPropertiesAction(properties);

    const result = savedPropertyReducer(initialState, action);

    expect(result).toBe(properties);
  });

});
