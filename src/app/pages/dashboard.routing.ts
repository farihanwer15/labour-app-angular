import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AddSitesComponent } from './add-sites/add-sites.component';
import { LabourComponent } from './labour/labour.component';
import { SiteComponent } from './site/site.component';


export const DashboardRoutes: Routes = [
  {
    path:'',
    children:[
      {
        path: "site", component: SiteComponent,
        data: { title: "site" }
      },
      {
        path:"labour",component:LabourComponent,
        data: { title: "labour" }
      }
    ]
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class DashRoutingModule { }