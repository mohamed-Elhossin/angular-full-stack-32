 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CreateAdminCourseComponent } from './components/courses/create-admin-course/create-admin-course.component';
import { ListadminCourseComponent } from './components/courses/listadmin-course/listadmin-course.component';
import { UpdateAdminCourseComponent } from './components/courses/update-admin-course/update-admin-course.component';
import { TrainersAdminCreateComponent } from './components/trainers/trainers-admin-create/trainers-admin-create.component';
import { TrainersAdminListComponent } from './components/trainers/trainers-admin-list/trainers-admin-list.component';
import { UpdateAdminTrainersComponent } from './components/trainers/update-admin-trainers/update-admin-trainers.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

const route: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'cc', component: CreateAdminCourseComponent },
      { path: 'lc', component: ListadminCourseComponent },
      { path: 'uc', component: UpdateAdminCourseComponent },

      { path: 'ct', component: TrainersAdminCreateComponent },
      { path: 'lt', component: TrainersAdminListComponent },
      { path: 'ut', component: UpdateAdminTrainersComponent },

      { path: '', component: AdminHomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class AdminModule {}
