import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { AboutComponent } from './features/components/about/about.component';
import { CoursesComponent } from './features/components/courses/courses.component';
import { PricingComponent } from './features/components/pricing/pricing.component';
import { TrainersComponent } from './features/components/trainers/trainers.component';

export const routes: Routes = [
  {path:"home" , component : HomeComponent},
  {path:"about" , component : AboutComponent},
  {path:"courses" , component : CoursesComponent},
  {path:"pricing" , component : PricingComponent},
  {path:"trainers" , component : TrainersComponent},
];
