import {ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs";
import {DhDataService} from "@shared/services/data.service";
import { DhEpisode } from '@app/shared/interfaces/dh-data.interface';

@Component({
  selector: 'dh-episodes',
  templateUrl: './dh-episodes.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DhEpisodesComponent implements OnInit {
  public episodes$: Observable<DhEpisode[]>;

  constructor(private _dhDataService: DhDataService) {
    this.episodes$ = new Observable()
  }

  ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    this.episodes$ = this._dhDataService.getEpisodes$();
  }
}
