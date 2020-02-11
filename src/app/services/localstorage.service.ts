import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { filter, startWith, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  private localStorage$ = new Subject<string>();
  private storage: any = {};

  constructor() {
    let i = 0;
    let key;
    const localStorages = {};

    // tslint:disable-next-line: no-conditional-assignment
    while ((key = localStorage.key(i++))) {
      try {
        localStorages[key] = JSON.parse(localStorage.getItem(key));
      } catch (error) {
        localStorages[key] = localStorage.getItem(key);
      }
    }
    this.storage = localStorages;
  }

  get(key: string): any {
    return this.storage[key];
  }

  set(key: string, item): void {
    this.storage[key] = item;
    this.localStorage$.next(key);
    localStorage.setItem(key, JSON.stringify(item));
  }
  remove(key: string, item: any): void {
    const items = this.storage[key];
    items.splice(item, 1);
    localStorage.setItem(key, JSON.stringify(items));
    this.localStorage$.next(key);
    console.log(items);
  }

  observe(key: string) {
    return this.localStorage$.pipe(
      startWith(key),
      // tslint:disable-next-line: triple-equals
      filter(changedKey => changedKey == key),
      map((changedKey: string) => this.storage[changedKey])
    );
  }
}
