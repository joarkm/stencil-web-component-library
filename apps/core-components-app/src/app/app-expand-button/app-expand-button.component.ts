import { Component } from '@angular/core';

@Component({
  selector: 'core-components-app-expand-button',
  templateUrl: './app-expand-button.component.html',
  styleUrls: ['./app-expand-button.component.scss'],
})
export class AppExpandButtonComponent {
  availableExpandDirections: ('left' | 'right' | 'up' | 'down')[] = [
    'left', 'right',
    'up', 'down'
  ];
  // expandDirection = this.availableExpandDirections[1];
  expandDirection: ('left' | 'right' | 'up' | 'down') = 'down';

  public onOptionSelected(e: Event): void {
    console.log(`Event:`, e);
    const placement = (e as CustomEvent).detail;
    console.log(`Selected option: ${placement}`);
    this.expandDirection = placement;
  }
}
