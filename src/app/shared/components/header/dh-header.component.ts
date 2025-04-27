import {Component, Output, EventEmitter, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'dh-header',
  templateUrl: './dh-header.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DhHeaderComponent {
  @Output() sidebarToggle = new EventEmitter<void>();

  public isSidebarOpen = false;

  public toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarToggle.emit();
  }
}
