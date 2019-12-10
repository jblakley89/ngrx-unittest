import { Action } from '@ngrx/store';
import { makeActionCreator } from '../action-creator';

export const SETFILMS = '[Films] Set Films';
export const GETFILMS = '[Films] Get Films';

export const setFilms = makeActionCreator(SETFILMS, 'films');
export const getFilms = makeActionCreator(GETFILMS);

