import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';

import { FeedManegerRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FiltersComponent } from './filters/filters.component';
import { FeedNewComponent } from './feed-new/feed-new.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { HistoryComponent } from './history/history.component';
import { LoadingParametersComponent } from './loading-parameters/loading-parameters.component';
import { RewritingParametersComponent } from './rewriting-parameters/rewriting-parameters.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedsComponent,
    FiltersComponent,
    FeedNewComponent,
    MonitoringComponent,
    HistoryComponent,
    LoadingParametersComponent,
    RewritingParametersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FeedManegerRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
