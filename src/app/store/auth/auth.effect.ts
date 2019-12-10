import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { switchMap, delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { User } from './models';
import * as actions from './auth.action';

@Injectable()
export class AuthEffects {
    login$ = createEffect(() => this.action$.pipe(
        ofType(actions.LOGIN),
        delay(2000),
        switchMap((params: any) => {
            const user = new User();
            user.firstName = 'Alex';
            user.lastName = 'Smith';
            user.userName = params.username;
            const token = '123456789';
            this.router.navigate(['/films']);
            return of(actions.sessionStart(user, token));
        })
    ));

    constructor(
        private action$: Actions,
        private router: Router
    ) { }
}

