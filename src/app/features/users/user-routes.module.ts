import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrainersComponent } from './components/trainers/trainers.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { LayoutComponent } from './layout/layout.component';

const route: Routes = [
  {path : "", component :LayoutComponent , children: [
    { path: 'home', component: HomeComponent },
    { path: 'trainers', component: TrainersComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'about', component: AboutComponent },
    { path: 'courses', component: CoursesComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class UserModule {}
