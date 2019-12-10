import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '@app/store';
import * as fromAuth from '@store/auth';
import { User } from '@store/auth/models';

@Component({
  selector: 'app-header',
  template: `
    <div class="header"><div class="container">
        <div class="row">
            <div class="col-3">
                <img class="logo" src="https://www.studioghibli.com.au/wp-content/uploads/2017/07/ghibli_logo_white-1.png">
            </div>
            <div class="col-6">
                <ul class="menu">
                    <li><a class="nav-link" routerLink="films" routerLinkActive="active">Films</a></li>
                    <li><a class="nav-link" routerLink="characters" routerLinkActive="active">Characters</a></li>
                </ul>
            </div>
            <div class="col-3 userInfo">
                Welcome {{ (user$ | async).userName }} <a href (click)="logout()">logout</a>
            </div>
        </div>
    </div></div>
  `,
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
    user$: Observable<User>;

    constructor(
        private store: Store<fromStore.State>,
        private router: Router
    ) {
        this.user$ = this.store.select(fromAuth.selectUser);
    }

    logout() {
        this.store.dispatch(fromAuth.logout());
        this.router.navigate(['/login']);
    }
}
