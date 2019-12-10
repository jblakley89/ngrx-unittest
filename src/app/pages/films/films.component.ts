import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '@app/store';
import * as fromFilms from '@store/films';
import { Film } from '@store/films/models';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.less']
})
export class FilmsComponent {
    films$: Observable<Film[]>;
    isLoading$: Observable<boolean>;

    constructor(
        public store: Store<fromStore.State>
    ) {
        this.store.dispatch(fromFilms.getFilms());
        this.films$ = this.store.select(fromFilms.selectFilms);
        this.isLoading$ = this.store.select(fromFilms.selectLoading);
    }

}
