import { ActionReducer, Action } from '@ngrx/store';
import { ArrayHelperService } from '@services/helper/array-helper.service';
import * as actions from './films.action';
import { State } from '@app/store';
import { Film } from './models';

export interface IFilmsState {
    films: Film[];
    isLoading: boolean;
    error: string;
}

export const initialState: IFilmsState = {
    films: [],
    isLoading: true,
    error: null
};

export function reducer(state: IFilmsState = initialState, action) {
    switch (action.type) {
        case actions.GETFILMS:
            return {
                ...state,
                isLoading: true
            };
        case actions.GETFILMSERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case actions.SETFILMS:
            return {
                ...state,
                films: action.films,
                isLoading: false
            };
            break;
        default:
            return state;
    }
}

// Selectors
export const selectAll = (state: State) => state.films;
export const selectFilms = (state: State) =>
    state.films.films.sort((f1, f2) => {
        return ArrayHelperService.sortStrings(f1.title, f2.title);
    });
export const selectLoading = (state: State) => state.films.isLoading;
export const selectError = (state: State) => state.films.error;

