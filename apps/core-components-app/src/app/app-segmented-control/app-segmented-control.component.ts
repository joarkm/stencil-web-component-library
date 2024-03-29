import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'core-components-app-segmented-control',
  templateUrl: './app-segmented-control.component.html',
  styleUrls: ['./app-segmented-control.component.scss'],
})
export class AppSegmentedControlComponent {
  public formGroup = new FormGroup({
    options: new FormArray([
      new FormControl('Option 1'),
      new FormControl('Option 2'),
      new FormControl('Option 3')
    ])
  });

  public get options(): FormArray {
    return this.formGroup.get('options') as FormArray;
  }

  optionsLabels = ['Option 1', 'Option 2', 'Option 3'];
  public selectedOptionIndex = 0;
  public selectedOption = this.optionsLabels[this.selectedOptionIndex];

  public onOptionSelected(e: Event): void {
    console.log(`Event:`, e);
    const option = (e as CustomEvent).detail;
    console.log(`Selected option: ${option}`);
    this.selectedOption = option;
  }
}
