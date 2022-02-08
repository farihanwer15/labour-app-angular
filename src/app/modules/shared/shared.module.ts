import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * UI component modules
 */
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
      return {
          ngModule: SharedModule,
          providers: []
      };
  }

}