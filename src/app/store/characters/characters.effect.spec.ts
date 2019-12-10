import { TestBed, fakeAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { GhibliApiService } from '@services/api/ghibli-api.service';

import { CharactersEffects } from './characters.effect';
import * as actions from './characters.action';
import * as reducer from './characters.reducer';

describe('Store - characters effects', () => {
    let effects: CharactersEffects;
    let actions$: Observable<Action>;
    let ghibliApiSpy: jasmine.SpyObj<GhibliApiService>;

    beforeEach(fakeAsync(() => {
        const spyGhibliApi = jasmine.createSpyObj('GhibliApi', ['getCharacters']);
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                CharactersEffects,
                provideMockActions(() => actions$),
                { provide: GhibliApiService, useValue: spyGhibliApi }
            ]
        });

        effects = TestBed.get(CharactersEffects);
        ghibliApiSpy = TestBed.get(GhibliApiService);
    }));

    describe('getCharacters$', () => {
        it('should dispatch the proper succes action', () => {
            const successData = [
                {
                    id: '1',
                    name: 'cat',
                    gender: 'female',
                    age: '12 years'
                },
                {
                    id: '2',
                    name: 'witch',
                    gender: 'male',
                    age: '122 years'
                }
            ];
            actions$ = hot('--a-', { a: actions.getCharacters() });
            const expected = cold('--b', { b: actions.setCharacters(successData) });
            ghibliApiSpy.getCharacters.and.returnValue(of(successData));

            expect(effects.getCharacters$).toBeObservable(expected);
        });

        it('should dispatch the proper error action', () => {
            const msg = '401: Unauthorized';
            actions$ = hot('--a-', { a: actions.getCharacters() });
            const error = hot('-#', null,  msg );
            const expected = hot('--b', { b: actions.getCharactersError(msg) });
            ghibliApiSpy.getCharacters.and.returnValue(error);

            expect(effects.getCharacters$).toBeObservable(expected);
        });
    });

});
