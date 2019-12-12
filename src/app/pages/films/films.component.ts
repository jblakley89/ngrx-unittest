import { Component, AfterViewInit } from '@angular/core';
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
export class FilmsComponent implements AfterViewInit {
    films: Film[] = [];
    isLoading = true;
    error: string;

    constructor(
        public store: Store<fromStore.State>
    ) {

        this.store.select(fromFilms.selectAll).subscribe((state) => {
            this.films = state.films || [];
            this.isLoading = state.isLoading || false;
            this.error = state.error;

        });
    }

    ngAfterViewInit() {
        if (!this.films.length) {
            this.store.dispatch(fromFilms.getFilms());
        }
    }
}
