import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'sidebar-menu',
  styleUrl: 'sidebar-menu.scss',
  shadow: true,
})
export class SidebarMenu {

  @State() isCollapsed = true;

  menuItemLetters: string[] = new Array<string>(10).fill('A')
    .map((c, idx) => String.fromCharCode(c.charCodeAt(0) + (1*idx)));

  menuItemLabels: string[] = this.menuItemLetters
    .map(letter => new Array(10).fill(letter).join(''));  

  toggleExpand(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  render() {
    return (
      <aside class={{
        'menu': true,
        'menu--collapsed': this.isCollapsed
      }}>
        <menu class="menu-list">
          {this.menuItemLabels.map(label => (
            <li
              class={{
                'menu-list-item': true,
                'menu-list-item--collapsed': this.isCollapsed
              }}
              aria-label={label}>
                <div class="menu-list-item__icon"></div>
                <span class="menu-list-item__tooltip">{label}</span>
                <span class="menu-list-item__label">{label}</span>
            </li>
          ))}
        </menu>
          <span
            class={{
              'menu-list__toggle': true,
              'menu-list__toggle--expanded': !this.isCollapsed
            }}
            onClick={() => this.toggleExpand()}>
            {/* {this.isCollapsed ? MenuExpansion.EXPAND : MenuExpansion.OPEN} */}
          </span>
      </aside>
    );
  }
}