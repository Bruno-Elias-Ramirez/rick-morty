import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {DhCharacter} from '@app/shared/interfaces/dh-data.interface';

@Component({
  selector: 'dh-characters-card',
  templateUrl: './dh-characters-card.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DhCharactersCardComponent {
  @Input() public character!: DhCharacter;
}

