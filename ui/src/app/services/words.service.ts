
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class WordsService {
    // base url using our local environment
    private BASE_URL = environment.api;
    constructor(private http: HttpClient) { }

    getAllTypes() {
        return this.http.get(`${this.BASE_URL}/types`);
    }
    findWords(id: string) {
        return this.http.get(`${this.BASE_URL}/types/${id}`);
    }
    buildSentence(sentence: string) {
        return this.http.post(`${this.BASE_URL}/types/sentences`, { sentence });
    }
    getAllWordSentences(word: string) {
        return this.http.get(`${this.BASE_URL}/types/sentences/${word}`);
    }
}