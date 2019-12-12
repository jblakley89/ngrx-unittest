import { Action } from '@ngrx/store';
import { makeActionCreator } from '../action-creator';

export const SETFILMS = '[Films] Set Films';
export const GETFILMS = '[Films] Get Films';
export const GETFILMSERROR = '[Films] Get Films Error';

export const setFilms = makeActionCreator(SETFILMS, 'films');
export const getFilms = makeActionCreator(GETFILMS);
export const getFilmsError = makeActionCreator(GETFILMSERROR, 'error');

