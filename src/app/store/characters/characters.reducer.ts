import { ActionReducer, Action } from '@ngrx/store';
import { ArrayHelperService } from '@services/helper/array-helper.service';
import * as actions from './characters.action';
import { State } from '@app/store';
import { Character } from './models';

export interface ICharactersState {
    characters: Character[];
    isLoading: boolean;
    error: string;
}

export const initialState: ICharactersState = {
    characters: [],
    isLoading: true,
    error: null
};

export function reducer(state: ICharactersState = initialState, action) {
    switch (action.type) {
        case actions.GETCHARACTERS:
            return {
                ...state,
                isLoading: true
            };
        case actions.GETCHARACTERSERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case actions.SETCHARACTERS:
            return {
                ...state,
                characters: action.characters,
                isLoading: false
            };
            break;
        default:
            return state;
    }
}

// Selectors
export const selectCharacters = (state: State) =>
    state.characters.characters.sort((c1, c2) => {
        return ArrayHelperService.sortStrings(c1.name, c2.name);
    });
export const selectLoading = (state: State) => state.characters.isLoading;
export const selectError = (state: State) => state.characters.error;

