import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from '../../app.component';
import {savedPropertyReducer} from './saved-properties.reducer';
import {IAction} from '../../interfaces/action.interface';
import {IProperty} from '../../interfaces/property.interface';
import {removeSavedPropertyAction, savePropertyAction} from '../actions/saved-properties-action.creator';

describe('Saved Property Reducer', () => {

  it('should return initial state if unknown action', () => {
    const initialState = [];
    const action = <IAction>{ type: 'not a known action', payload: null };

    const result = savedPropertyReducer(initialState, action);

    expect(result).toBe(initialState);
  });


  it('should return new state instance with property included when saving a property', () => {
    const initialState = [];
    const propertyToSave = <IProperty>{ id: 1 };
    const action = savePropertyAction(propertyToSave);

    const result = savedPropertyReducer(initialState, action);

    expect(result).not.toBe(initialState);
    expect(result.length).toBe(1);
    expect(result[0].id).toBe(propertyToSave.id);
  });

  it('should not save property with the same id twice', () => {
    const existingProperty = <IProperty>{ id: 1 };
    const initialState = [existingProperty];
    const propertyToSave = <IProperty>{ id: 1 };
    const action = savePropertyAction(propertyToSave);

    const result = savedPropertyReducer(initialState, action);

    expect(result).toBe(initialState);
    expect(result.length).toBe(1);
    expect(result[0]).toBe(existingProperty);
    expect(result[0].id).toBe(existingProperty.id);
  });

  it('should remove an existing saved property and return new instance (only one saved property)', () => {
    const existingProperty = <IProperty>{ id: 1 };
    const initialState = [existingProperty];
    const action = removeSavedPropertyAction(existingProperty.id);

    const result = savedPropertyReducer(initialState, action);

    expect(result).not.toBe(initialState);
    expect(result.length).toBe(0);
  });

  it('should remove an existing saved property and return new instance (multiple saved properties)', () => {
    const existingProperty = <IProperty>{ id: 1 };
    const initialState = [existingProperty, {id: 2}, {id: 3}];
    const action = removeSavedPropertyAction(existingProperty.id);

    const result = savedPropertyReducer(initialState, action);

    expect(result).not.toBe(initialState);
    expect(result.length).toBe(2);
    expect(result[0].id).toBe(2);
    expect(result[1].id).toBe(3);
  });

  it('should return initial state if removing a property that isnt saved', () => {
    const existingProperty = <IProperty>{ id: 1 };
    const initialState = [existingProperty];
    const action = removeSavedPropertyAction(4);

    const result = savedPropertyReducer(initialState, action);

    expect(result).toBe(initialState);
    expect(result.length).toBe(1);
  });

});
