import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBook} from '../models/book/book.interface';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor(
        private http: HttpClient
    ) {
    }

    public getBooks(): Observable<IBook[]> {
        return this.http.get<IBook[]>(`https://fakerestapi.azurewebsites.net/api/Books`);
    }
}
