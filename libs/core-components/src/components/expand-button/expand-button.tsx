import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'expand-button',
  styleUrl: 'expand-button.scss',
  shadow: true,
})
export class ExpandButton {
  /**
   * The direction to expand. E.g. 'right' means it goes from '<' to '>', from left to right.
   */
  @Prop() direction: 'right' | 'left' | 'up' | 'down' = 'right';
  @Prop({ reflect: true, mutable: true }) isExpanded = false;

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  render() {
    return (
      <div
        class={{
          'expand-button': true,
          'expand-button--expanded': this.isExpanded,
          'expand-button--left': this.direction === 'left',
          'expand-button--up': this.direction === 'up',
          'expand-button--down': this.direction === 'down'
        }}
        onClick={() => this.toggleExpanded()}>
      </div>
    );
  }
}
