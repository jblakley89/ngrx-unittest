import { TestBed, fakeAsync } from '@angular/core/testing';
import * as actions from './films.action';
import { reducer, IFilmsState, initialState } from './films.reducer';

describe('Store - films reducer', () => {
    const fullState: IFilmsState = {
        films: [
            {
                id: '1',
                title: 'film1',
                description: 'film1 things',
                director: 'guy1',
                producer: 'lady1',
                year: '1775',
                score: '85'
            },
            {
                id: '2',
                title: 'film2',
                description: 'film2 things',
                director: 'lady2',
                producer: 'guy2',
                year: '1875',
                score: '65'
            }
        ],
        isLoading: false,
        error: null
    };

    it('should use initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    describe('GETFILMS reducer', () => {
        const action = {
            type: actions.GETFILMS
        };
        const expected = { ...fullState };
        expected.isLoading = true;

        it('should set isLoading without changing other properties', () => {
            expect(reducer(fullState, action)).toEqual(expected);
        });

    });

    describe('GETFILMSERROR reducer', () => {
        const errorMsg = 'Test Error, stuff went down';
        const action = {
            type: actions.GETFILMSERROR,
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

    describe('SETFILMS reducer', () => {
        const characterList = fullState.films;
        const action = {
            type: actions.SETFILMS,
            films: characterList
        };
        const currentState = { ...fullState };
        currentState.isLoading = true;
        currentState.films = [];
        const expected = { ...fullState };
        expected.isLoading = false;

        it('should set isLoading and films without changing other properties', () => {
            expect(reducer(currentState, action)).toEqual(expected);
        });

    });
});
