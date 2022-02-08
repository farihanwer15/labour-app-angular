import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SiteComponent } from './pages/site/site.component';
import { AddSitesComponent } from './pages/add-sites/add-sites.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './modules/core/core.module';

@NgModule({
    declarations: [
        AppComponent,
        SiteComponent,
        AddSitesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ReactiveFormsModule,
        CoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
