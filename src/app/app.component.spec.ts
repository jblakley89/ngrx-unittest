import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header-footer/header.component';
import { FooterComponent } from './components/header-footer/footer.component';
import * as fromStore from '@app/store';

describe('AppComponent', () => {
    let store: MockStore<fromStore.State>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            declarations: [
                AppComponent,
                HeaderComponent,
                FooterComponent
            ],
            providers: [
                provideMockStore({})
            ]
        });
        store = TestBed.get(Store);
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

});
