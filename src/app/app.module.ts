import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { SearchListComponent } from './list/search-list/search-list.component';
import { InputTextComponent } from './header/input-text/input-text.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    SearchListComponent,
    InputTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
