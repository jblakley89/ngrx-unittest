import { Action } from '@ngrx/store';
import { makeActionCreator } from '../action-creator';

export const SETCHARACTERS = '[Characters] Set Characters';
export const GETCHARACTERS = '[Characters] Get Characters';
export const GETCHARACTERSERROR = '[Characters] Get Characters Error';

export const setCharacters = makeActionCreator(SETCHARACTERS, 'characters');
export const getCharacters = makeActionCreator(GETCHARACTERS);
export const getCharactersError = makeActionCreator(GETCHARACTERSERROR, 'error');

