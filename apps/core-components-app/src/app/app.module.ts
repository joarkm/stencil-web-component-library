import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CoreComponentsAngularModule } from '@core-components/core-components-angular';
import { defineCustomElements } from 'dist/libs/core-components/loader';

import { AppComponent } from './app.component';
import { AppSegmentedControlComponent } from './app-segmented-control/app-segmented-control.component';

defineCustomElements();

@NgModule({
  imports: [
    BrowserModule,
    CoreComponentsAngularModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, AppSegmentedControlComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
