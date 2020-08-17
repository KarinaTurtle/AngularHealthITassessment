import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SelectStateComponent } from './components/select-state/select-state.component';
import { ChartComponent } from './components/chart/chart.component';
import { StaticInfoComponent } from './components/static-info/static-info.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { FusionChartsModule } from 'angular-fusioncharts';

@NgModule({
  declarations: [
    AppComponent,
    SelectStateComponent,
    ChartComponent,
    StaticInfoComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, FusionChartsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
