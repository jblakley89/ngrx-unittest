import { TestBed, fakeAsync } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { GhibliApiService } from '@services/api/ghibli-api.service';

import { FilmsEffects } from './films.effect';
import * as actions from './films.action';
import * as reducer from './films.reducer';

describe('Store - films effects', () => {
    let effects: FilmsEffects;
    let actions$: Observable<Action>;
    let ghibliApiSpy: jasmine.SpyObj<GhibliApiService>;

    beforeEach(fakeAsync(() => {
        const spyGhibliApi = jasmine.createSpyObj('GhibliApi', ['getFilms']);
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                FilmsEffects,
                provideMockActions(() => actions$),
                { provide: GhibliApiService, useValue: spyGhibliApi }
            ]
        });

        effects = TestBed.get(FilmsEffects);
        ghibliApiSpy = TestBed.get(GhibliApiService);
    }));

    describe('getFilms$', () => {
        it('should dispatch the proper succes action', () => {
            const successData = [
                {
                    id: '1',
                    title: 'film1',
                    description: 'film1 things',
                    director: 'guy1',
                    producer: 'lady1',
                    year: '1775',
                    score: '85'
                },
                {
                    id: '2',
                    title: 'film2',
                    description: 'film2 things',
                    director: 'lady2',
                    producer: 'guy2',
                    year: '1875',
                    score: '65'
                }
            ];
            actions$ = hot('--a-', { a: actions.getFilms() });
            const expected = cold('--b', { b: actions.setFilms(successData) });
            ghibliApiSpy.getFilms.and.returnValue(of(successData));

            expect(effects.getFilms$).toBeObservable(expected);
        });

        it('should dispatch the proper error action', () => {
            const msg = '401: Unauthorized';
            actions$ = hot('--a-', { a: actions.getFilms() });
            const error = hot('-#', null,  msg );
            const expected = hot('--b', { b: actions.getFilmsError(msg) });
            ghibliApiSpy.getFilms.and.returnValue(error);

            expect(effects.getFilms$).toBeObservable(expected);
        });
    });

});
