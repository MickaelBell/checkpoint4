import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CreateProfilPageComponent } from './create-profil-page/create-profil-page.component';
import { LogPageComponent } from './log-page/log-page.component';
import { ListByChildAgePageComponent } from './list-by-child-age-page/list-by-child-age-page.component';
import { MyListPageComponent } from './my-list-page/my-list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CreateProfilPageComponent,
    LogPageComponent,
    ListByChildAgePageComponent,
    MyListPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
