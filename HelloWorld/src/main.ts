import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import{ NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

