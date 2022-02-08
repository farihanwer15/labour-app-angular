import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from '../pages/page.routing';
import { MaterialModule } from '../modules/shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SiteComponent } from './site/site.component';
// import { AddSitesComponent } from './add-sites/add-sites.component';

@NgModule({
  // declarations: [SiteComponent],
  imports: [
    CommonModule,
    PageRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PageModule { }
