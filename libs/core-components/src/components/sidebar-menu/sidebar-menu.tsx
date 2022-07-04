import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'sidebar-menu',
  styleUrl: 'sidebar-menu.scss',
  shadow: true,
})
export class SidebarMenu {

  @State() isCollapsed = true;
  @State() activeIndex = -1;

  @Prop() placement: 'left' | 'right' = 'left';

  menuItemLetters: string[] = new Array<string>(26).fill('A')
    .map((c, idx) => String.fromCharCode(c.charCodeAt(0) + (1*idx)));

  menuItemLabels: string[] = this.menuItemLetters
    .map(letter => new Array(10).fill(letter).join(''));  

  toggleExpand(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  setActive(index: number): void {
    this.activeIndex = index;
  }

  render() {
    return (
      <aside class={{
        'menu': true,
        'menu--collapsed': this.isCollapsed,
        'menu--right': this.placement === 'right'
      }}>
        <menu class="menu-list">
          {this.menuItemLabels.map((label, idx) => (
            <li
              class={{
                'menu-list-item': true,
                'menu-list-item--collapsed': this.isCollapsed,
                'menu-list-item--active': this.activeIndex === idx,
                'menu-list-item--right': this.placement === 'right'
              }}
              aria-label={label}
              onClick={() => this.setActive(idx)}>
                <span class="menu-list-item__tooltip">{label}</span>
                <div class="menu-list-item-grid">
                  <div class="menu-list-item__icon"></div>
                  <span class="menu-list-item__label">{label}</span>
                </div>
            </li>
          ))}
        </menu>
        <span
          class={{
            'menu__toggle': true,
            'menu__toggle--expanded': !this.isCollapsed
          }}
          onClick={() => this.toggleExpand()}>
        </span>
      </aside>
    );
  }
}