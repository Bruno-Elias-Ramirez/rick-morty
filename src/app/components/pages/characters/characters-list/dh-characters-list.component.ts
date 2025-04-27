import {ChangeDetectionStrategy, OnInit, ViewEncapsulation} from '@angular/core';
import {Component} from '@angular/core';
import {DhCharacter} from '@app/shared/interfaces/dh-data.interface';
import {DhDataService} from "@shared/services/data.service";
import {Observable} from "rxjs";

@Component({
  selector: 'dh-characters-list',
  templateUrl: './dh-characters-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DhCharactersListComponent implements OnInit {
  public characters$: Observable<DhCharacter[]>;

  constructor(private _dhDataService: DhDataService) {
    this.characters$ = new Observable()
  }

  ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this.characters$ = this._dhDataService.getCharacters$();
  }
}
