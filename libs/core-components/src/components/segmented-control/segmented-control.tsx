import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'segmented-control',
  styleUrl: 'segmented-control.scss',
  shadow: true,
})
export class SegmentedControl {
  @Prop({ mutable: true, reflect: true }) isSelected: boolean;
  @Prop({ mutable: true, reflect: true }) optionLabel: string;

  @Event() selected: EventEmitter<void>;

  render() {
    return (
      <button
        onClick={() => this.selected.emit()}
        class={{
          'segmented-control': true,
          'segmented-control--active': this.isSelected
        }}>
        {this.optionLabel}
      </button>
    );
  }
}
