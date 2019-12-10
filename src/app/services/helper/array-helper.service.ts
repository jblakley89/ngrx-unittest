import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ArrayHelperService {

    static sortStrings(a, b) {
        const stringA = a.toUpperCase();
        const stringB = b.toUpperCase();
        let ret = 0;

        if (stringA < stringB) {
            ret = -1;
        } else if (stringA > stringB) {
            ret = 1;
        }

        return ret;
    }
}

