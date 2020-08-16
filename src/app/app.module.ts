import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SelectStateComponent } from './components/select-state/select-state.component';
import { ChartComponent } from './components/chart/chart.component';
import { StaticInfoComponent } from './components/static-info/static-info.component';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectStateComponent,
    ChartComponent,
    StaticInfoComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
