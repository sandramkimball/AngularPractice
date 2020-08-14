import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CheeseComponent } from './cheese/cheese.component';
import { MeatsComponent } from './meats/meats.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cheese', component: CheeseComponent},
  {path: 'meats', component: MeatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
