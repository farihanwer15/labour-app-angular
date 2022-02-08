import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';

/**
 * Angular Material Components
 */

@NgModule({
  declarations: [SideNavComponent],
  imports: [
    SharedModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  exports: [
    SideNavComponent,
    SharedModule
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}