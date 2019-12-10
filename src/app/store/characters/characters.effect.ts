import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { GhibliApiService } from '@services/api/ghibli-api.service';

import * as actions from './characters.action';

@Injectable()
export class CharactersEffects {
    getCharacters$ = createEffect(() =>
        this.actions$.pipe(
            ofType(actions.GETCHARACTERS),
            switchMap(() =>
                this.ghibliApi
                    .getCharacters()
                    .pipe(
                        map(data => actions.setCharacters(data)),
                        catchError(error => of(actions.getCharactersError(error)))
                    )
            )
        )
    );

    constructor(
        private ghibliApi: GhibliApiService,
        private actions$: Actions
    ) { }
}

