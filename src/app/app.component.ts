import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isSidebarOpen = false;

  public toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
