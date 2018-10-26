import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserTabComponent } from './home/user-tab/user-tab.component';
import { UserDetailsComponent } from './home/user-details/user-details.component';
import { UserReposComponent } from './home/user-repos/user-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserTabComponent,
    UserDetailsComponent,
    UserReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
