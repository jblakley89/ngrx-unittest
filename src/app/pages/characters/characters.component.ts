import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '@app/store';
import * as fromCharacters from '@store/characters';
import { Character } from '@store/characters/models';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.less']
})
export class CharactersComponent {
    characters$: Observable<Character[]>;
    isLoading$: Observable<boolean>;

    constructor(
        public store: Store<fromStore.State>
    ) {
        this.store.dispatch(fromCharacters.getCharacters());
        this.characters$ = this.store.select(fromCharacters.selectCharacters);
        this.isLoading$ = this.store.select(fromCharacters.selectLoading);
    }

}
