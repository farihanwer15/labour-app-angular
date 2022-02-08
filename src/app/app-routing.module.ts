import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
    // { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
    { path: 'dashboard', loadChildren: () => import('../app/pages/dashboard.module').then(m => m.DashboardModule) },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
