import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProfilPageComponent } from './create-profil-page/create-profil-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListByChildAgePageComponent } from './list-by-child-age-page/list-by-child-age-page.component';
import { LogPageComponent } from './log-page/log-page.component';
import { MyListPageComponent } from './my-list-page/my-list-page.component';

const routes: Routes = [
  {
    path:'', component: HomePageComponent
  },
  {
    path:'home', component: HomePageComponent
  },
  {
    path:'parents', component: CreateProfilPageComponent
  },
  {
    path:'login', component: LogPageComponent
  },
  {
    path:'listByAge', component: ListByChildAgePageComponent
  },
  {
    path:'myList', component: MyListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
