import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Calculator components
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports:      [ BrowserModule, MatToolbarModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
