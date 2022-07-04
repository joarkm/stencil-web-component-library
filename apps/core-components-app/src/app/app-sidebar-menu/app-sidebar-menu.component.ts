import { Component } from '@angular/core';

@Component({
  selector: 'core-components-app-sidebar-menu',
  templateUrl: './app-sidebar-menu.component.html',
  styleUrls: ['./app-sidebar-menu.component.scss'],
})
export class AppSidebarMenuComponent {
  placement: 'left' | 'right' = 'right';
  availablePlacements: ('left' | 'right')[] = ['left', 'right'];

  public onOptionSelected(e: Event): void {
    console.log(`Event:`, e);
    const option = (e as CustomEvent).detail;
    console.log(`Selected option: ${option}`);
    this.placement = option;
  }
}
