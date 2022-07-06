import { Component } from '@angular/core';

@Component({
  selector: 'core-components-app-sidebar-menu',
  templateUrl: './app-sidebar-menu.component.html',
  styleUrls: ['./app-sidebar-menu.component.scss'],
})
export class AppSidebarMenuComponent {
  availablePlacements: ('left' | 'right')[] = ['left', 'right'];
  placement = this.availablePlacements[0];

  public onOptionSelected(e: Event): void {
    console.log(`Event:`, e);
    const placement = (e as CustomEvent).detail;
    console.log(`Selected option: ${placement}`);
    this.placement = placement;
  }
}
