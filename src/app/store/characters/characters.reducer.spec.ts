import { TestBed, fakeAsync } from '@angular/core/testing';
import * as actions from './characters.action';
import { reducer, ICharactersState, initialState } from './characters.reducer';

describe('Store - characters reducer', () => {
    const fullState: ICharactersState = {
        characters: [
            {
                id: '1',
                name: 'guy',
                gender: 'yes',
                age: 'unknown'
            }
        ],
        isLoading: false,
        error: null
    };

    it('should use initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    describe('GETCHARACTERS reducer', () => {
        const action = {
            type: actions.GETCHARACTERS
        };
        const expected = { ...fullState };
        expected.isLoading = true;

        it('should set isLoading without changing other properties', () => {
            expect(reducer(fullState, action)).toEqual(expected);
        });

    });

    describe('GETCHARACTERSERROR reducer', () => {
        const errorMsg = 'Test Error, stuff went down';
        const action = {
            type: actions.GETCHARACTERSERROR,
            error: errorMsg
        };
        const currentState = { ...fullState };
        currentState.isLoading = true;
        const expected = { ...fullState };
        expected.isLoading = false;
        expected.error = errorMsg;

        it('should set isLoading and error  without changing other properties', () => {
            expect(reducer(currentState, action)).toEqual(expected);
        });

    });

    describe('SETCHARACTERS reducer', () => {
        const characterList = fullState.characters;
        const action = {
            type: actions.SETCHARACTERS,
            characters: characterList
        };
        const currentState = { ...fullState };
        currentState.isLoading = true;
        currentState.characters = [];
        const expected = { ...fullState };
        expected.isLoading = false;

        it('should set isLoading and characters without changing other properties', () => {
            expect(reducer(currentState, action)).toEqual(expected);
        });

    });
});
