import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from '../../app.component';
import {savedPropertyReducer} from './saved-properties.reducer';
import {IAction} from '../../interfaces/action.interface';
import {IProperty} from '../../interfaces/property.interface';
import {savePropertyAction} from '../actions/saved-properties-action.creator';

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

});
