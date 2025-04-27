import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {GraphQLModule} from "./graphql.module";
import {DhHeaderModule} from "@shared/components/header/dh-header.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,
    DhHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
