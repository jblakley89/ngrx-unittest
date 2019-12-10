import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GhibliApiService } from '@services/api/ghibli-api.service';

import * as actions from './films.action';

@Injectable()
export class FilmsEffects {
    getFilms$ = createEffect(() => this.action$.pipe(
        ofType(actions.GETFILMS),
        switchMap(() =>
            this.ghibliApi
                .getFilms()
                .pipe(map(data => actions.setFilms(data)))
        )
    ));

    constructor(
        private ghibliApi: GhibliApiService,
        private action$: Actions
    ) { }
}

