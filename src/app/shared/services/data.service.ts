import {Injectable} from '@angular/core';
import {BehaviorSubject, noop, Observable} from 'rxjs';
import {take, tap} from 'rxjs/operators';
import {Apollo} from 'apollo-angular';
import {DhCharacter, DhDataResponse, DhEpisode} from "@shared/interfaces/dh-data.interface";
import {QUERY} from "@shared/utils/dh-consts";

@Injectable({
  providedIn: 'root'
})
export class DhDataService {
  private _charactersSubject: BehaviorSubject<DhCharacter[]>;
  private _episodesSubject: BehaviorSubject<DhEpisode[]>;

  constructor(private _dhApollo: Apollo) {
    this._charactersSubject = new BehaviorSubject<DhCharacter[]>([]);
    this._episodesSubject = new BehaviorSubject<DhEpisode[]>([]);
    this._getDataAPI();
  }

  public getEpisodes$(): Observable<DhEpisode[]> {
    return this._episodesSubject.asObservable();
  }

  public getCharacters$(): Observable<DhCharacter[]> {
    return this._charactersSubject.asObservable();
  }

  private _getDataAPI(): void {
    this._dhApollo.watchQuery<DhDataResponse>({query: QUERY}).valueChanges
      .pipe(
        take(1),
        tap(({data}) => {
          const {characters, episodes} = data;
          this._episodesSubject.next(episodes?.results || []);
          this._charactersSubject.next(characters?.results || []);
        })).subscribe(() => noop());
  }
}
