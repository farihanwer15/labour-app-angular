import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { PageRoutingModule } from './dashboard.routing';
import{DashboardRoutes} from '../pages/dashboard.routing';
import { MaterialModule } from '../modules/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SiteComponent } from './site/site.component';
import { LabourComponent } from './labour/labour.component';
import { RouterModule } from '@angular/router';
// import { AddSitesComponent } from './add-sites/add-sites.component';

@NgModule({
  // declarations: [SiteComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(DashboardRoutes),
  ],
  declarations: [LabourComponent]
})
export class DashboardModule { }
