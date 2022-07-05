import { Component, h, Prop, State, Watch } from '@stencil/core';
import { debounce } from '../../utils/utils';

@Component({
  tag: 'sidebar-menu',
  styleUrl: 'sidebar-menu.scss',
  shadow: true,
})
export class SidebarMenu {

  @State() isCollapsed = true;
  @State() activeIndex = -1;
  @State() expandDirection: 'left' | 'right' = 'right';
  @State() scrolling = false;

  @Prop() placement: 'left' | 'right' = 'left';
  @Watch('placement') onPlacementChange(newPlacement: 'left' | 'right') {
    if (newPlacement === 'left') {
      this.expandDirection = 'right';
    }
    if (newPlacement === 'right') {
      this.expandDirection = 'left';
    }
  }

  menuItemLabels: string[] = [
    'Previous',
    'Play/pause',
    'Next',
    'Stop'
  ];
  scrollHandler(_event: Event) {
    if (!this.scrolling) {
      this.scrolling = true;
    }
    this.hideScrollBarOnScrollEnd();
  }

  hideScrollBarOnScrollEnd = debounce(() => {
    this.scrolling = false;
  }, 300);


  toggleCollapsed(): void {
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
        <menu onScroll={e => this.scrollHandler(e)}
          class={{
            'menu-list': true,
            'menu-list--scrolling': this.scrolling,
          }}
        >
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
        <expand-button class="menu__toggle"
          direction={this.expandDirection}
          onClick={() => this.toggleCollapsed()}>
        </expand-button>
        <svg width="0" height="0">
          <defs>
            <clipPath id="pauseClip">
              <polygon points="28,4 28,22 26,22 26,4"/>
              <polygon points="22,4 22,22 20,22 20,4" />
              <polygon points="2,4 18,14 2,22" />
            </clipPath>
          </defs>
        </svg>
        <svg width="0" height="0">
          <defs>
            <clipPath id="previousClip">
              <polygon points="0,14 14,4 14,22"/>
              <polygon points="14,14 28,4 28,22"/>
            </clipPath>
          </defs>
        </svg>
        <svg width="0" height="0">
          <defs>
            <clipPath id="nextClip">
              <polygon points="0,4 14,14 0,22"/>
              <polygon points="14,4 14,22 28,14"/>
            </clipPath>
          </defs>
        </svg>
        <svg width="0" height="0">
          <defs>
            <clipPath id="stopClip">
              <polygon points="4,4 24,4 24,24 4,24"/>
            </clipPath>
          </defs>
        </svg>
      </aside>
    );
  }
}