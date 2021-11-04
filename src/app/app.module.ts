import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { DetailComponent } from './detail.component';
import { RoutesModule } from './routes.module';

@NgModule({
  imports: [BrowserModule, FormsModule, RoutesModule],
  declarations: [AppComponent, ListComponent, DetailComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
