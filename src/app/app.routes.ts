import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/user-routes.module').then((m) => m.UserModule),
  },

  {
    path: 'admins',
    loadChildren: () =>
      import('./features/admin/admin-routes.module').then((m) => m.AdminModule),
  },
  {path :"",pathMatch:"full",redirectTo:"users"}
];
