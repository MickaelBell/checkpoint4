import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProfilPageComponent } from './create-profil-page/create-profil-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LogPageComponent } from './log-page/log-page.component';

const routes: Routes = [
  {
    path:'', component: HomePageComponent
  },
  {
    path:'parents', component: CreateProfilPageComponent
  },
  {
    path:'login', component: LogPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
