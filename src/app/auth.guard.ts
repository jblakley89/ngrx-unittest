import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
import * as fromStore from '@app/store';
import * as fromAuth from '@store/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        public router: Router,
        public store: Store<fromStore.State>
    ) { }

    canActivate(): Observable<boolean> {
        return this.store.select(fromAuth.selectToken).pipe(
            map((token) => {
                // TODO: Do proper token verification
                // Check token expiration
                // If expired clear the session and navigaet to login/session expired page
                // Handle any token update logic here

                // Security theater... if there is a token you are authorized
                const valid = token ? true : false;
                if (!valid) {
                    this.router.navigate(['/login']);
                }
                return valid;
            }),
            take(1)
        );
    }
}

