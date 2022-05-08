import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreComponentsAngularModule } from '@core-components/core-components-angular';
import { defineCustomElements } from "dist/libs/core-components/loader";

import { AppComponent } from './app.component';

defineCustomElements();

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreComponentsAngularModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
