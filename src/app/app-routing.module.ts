import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroFormComponent} from './hero-form/hero-form.component';


const routes: Routes = [
  { path: 'forms', component: HeroFormComponent },
  { path: '', redirectTo: '/forms', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
