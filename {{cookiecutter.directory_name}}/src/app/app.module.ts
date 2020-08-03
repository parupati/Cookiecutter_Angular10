import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EnvServiceProvider } from './core/services/env.service.provider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [EnvServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
