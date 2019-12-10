import { ActionReducer, Action } from '@ngrx/store';
import * as actions from './auth.action';
import { State } from '@app/store';
import { User } from './models';

export interface IAuthState {
    user: User;
    token: string;
    isLoading: boolean;
    error: string;
}

const initialState: IAuthState = {
    user: new User(),
    token: null,
    isLoading: false,
    error: null
};

export function reducer(state: IAuthState = initialState, action) {
    switch (action.type) {
        case actions.LOGIN:
            return {
                ...state,
                isLoading: true,
                error: null
            };
            break;
        case actions.LOGINERROR:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
            break;
        case actions.SESSIONSTART:
            return {
                ...state,
                user: action.user,
                token: action.token,
                isLoading: false,
                error: null
            };
            break;
        case actions.LOGOUT:
            return initialState;
            break;
        default:
            return state;
    }
}

// Selectors
export const selectToken = (state: State): string => state.auth.token;
export const selectUser = (state: State): User => state.auth.user;
export const selectLoading = (state: State): boolean => state.auth.isLoading;
export const selectError = (state: State): string => state.auth.error;

