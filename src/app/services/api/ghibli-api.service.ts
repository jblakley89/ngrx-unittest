import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '@store/films/models';
import { Character } from '@store/characters/models';

@Injectable({
    providedIn: 'root'
})
export class GhibliApiService {
    baseUrl = 'https://ghibliapi.herokuapp.com';

    constructor(private httpClient: HttpClient) { }

    getFilms() {
        const url = `${ this.baseUrl }/films`;
        return this.httpClient.get<Film[]>(url);
    }

    getCharacters() {
        const url = `${ this.baseUrl }/people`;
        return this.httpClient.get<any>(url);
    }
}

