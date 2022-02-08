import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSitesComponent } from './add-sites/add-sites.component';
import { SiteComponent } from './site/site.component';


const routes: Routes = [
  { path: 'site', component: SiteComponent }
  
//   { path: 'addsite', component: AddSitesComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }