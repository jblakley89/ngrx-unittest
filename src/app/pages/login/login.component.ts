import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '@app/store';
import * as fromAuth from '@store/auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent {
    username: string;
    password: string;
    isLoading$: Observable<boolean>;
    error$: Observable<string>;

    constructor(
        private store: Store<fromStore.State>
    ) {
        this.isLoading$ = store.select(fromAuth.selectLoading);
        this.error$ = store.select(fromAuth.selectError);
    }

    doLogin() {
        if (this.username && this.password) {
            this.store.dispatch(fromAuth.login(this.username, this.password));
        }
    }
}
