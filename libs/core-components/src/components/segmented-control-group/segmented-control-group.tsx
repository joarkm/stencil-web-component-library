import { Component, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'segmented-control-group',
  styleUrl: 'segmented-control-group.scss',
  shadow: true,
})
export class SegmentedControlGroup {
  @Prop({ mutable: true, reflect: true }) selectedOption = 0;
  
  @Prop({ mutable: true, reflect: true }) optionLabels: string[];
  @Watch('optionLabels') onOptionLabelsChange(newValue: string[]) {
    if (newValue?.length > 3) {
      this.error = 'SegmentedControlGroup: max 3 options';
    }
  }

  @Event() selected: EventEmitter<string>;
  
  @State() private error?: string;
  private hasError(): boolean {
    return this.error !== undefined;
  }

  private getErrorContent() {
    return (
      <b><i>{this.error}</i></b>
    );
  }

  public setSelected(e: Event, index: number) {
    e.preventDefault();
    e.stopPropagation();
    this.selectedOption = index;
    this.selected.emit(this.optionLabels[index]);
    console.log(this.optionLabels[index]);
  }

  render() {
    console.log('rendering segmented-control-group, hasError?', this.hasError());
    console.log({ optionLabels: this.optionLabels });

    this.getErrorContent();

    if (this.optionLabels.length === 0) {
      return null;
    }

    return [
      <div style={{'display': 'flex'}}>
        <div class="segmented-control-group">
          {this.optionLabels.map((label, index) => (
            <segmented-control optionLabel={label} isSelected={this.selectedOption === index} onSelected={(e) => this.setSelected(e, index)}></segmented-control>
          ))}
        </div>
      </div>
    ];

    // if (this.hasError) {
    //   return (this.getErrorContent());
    // } else {
    //   return (
    //     <div>
    //       {this.optionLabels.length}
    //     </div>
    //   );
    // }

    // return (this.hasError
    //   ? this.getErrorContent()
    //   : 
    //     <div>
    //       {/* {JSON.stringify(this.optionLabels, null, 2)} */}
    //       {this.optionLabels.length}
    //     </div>
    //   
    // );
  }
}
