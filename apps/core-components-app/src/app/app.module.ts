import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CoreComponentsAngularModule } from '@core-components/core-components-angular';
import { defineCustomElements } from 'dist/libs/core-components/loader';
import { AppExpandButtonComponent } from './app-expand-button/app-expand-button.component';
import { AppSegmentedControlComponent } from './app-segmented-control/app-segmented-control.component';
import { AppComponent } from './app.component';


defineCustomElements();

@NgModule({
  imports: [
    BrowserModule,
    CoreComponentsAngularModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    AppExpandButtonComponent,
    AppSegmentedControlComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
