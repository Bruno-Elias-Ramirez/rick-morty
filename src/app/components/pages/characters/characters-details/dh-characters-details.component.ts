import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DhCharacter} from '@shared/interfaces/dh-data.interface';
import {DhDataService} from '@shared/services/data.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'dh-characters-details',
  templateUrl: './dh-characters-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DhCharactersDetailsComponent implements OnInit {
  public character$!: Observable<DhCharacter | undefined>;

  constructor(private _dhDataService: DhDataService,
              private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this._loadCharacter();
  }

  private _loadCharacter(): void {
    const characterId = this._route.snapshot.paramMap.get('id');

    this.character$ = this._dhDataService.getCharacters$()
      .pipe(map(characters => characters.find(character => Number(character.id) === Number(characterId))));
  }
}
