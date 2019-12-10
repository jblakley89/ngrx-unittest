import * as fromAuth from './auth';
import * as fromFilms from './films';
import * as fromCharacters from './characters';

export const reducers = {
    auth: fromAuth.reducer,
    films: fromFilms.reducer,
    characters: fromCharacters.reducer
};

export const effects = [
    fromAuth.AuthEffects,
    fromFilms.FilmsEffects,
    fromCharacters.CharactersEffects
];

export class State {
    auth: fromAuth.IAuthState;
    films: fromFilms.IFilmsState;
    characters: fromCharacters.ICharactersState;
}
