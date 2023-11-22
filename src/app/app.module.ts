import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { PriceCardComponent } from './components/price-card/price-card.component';

@NgModule({
  declarations: [AppComponent, FeatureCardComponent, PriceCardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
