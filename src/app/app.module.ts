import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ImpdataComponent } from './impdata/impdata.component';
import { ExpdataComponent } from './expdata/expdata.component';
import { AlldataComponent } from './alldata/alldata.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';
import { ApiService } from './api.service';
@NgModule({
  declarations: [
    AppComponent,
    ImpdataComponent,
    ExpdataComponent,
    AlldataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule,
    NoopAnimationsModule
  ],
  providers: [ ApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
