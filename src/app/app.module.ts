import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserrepoComponent } from './userrepo/userrepo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserdetailComponent,
    UserrepoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
