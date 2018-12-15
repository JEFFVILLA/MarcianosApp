import { NgModule } from '@angular/core';


import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Rutas
import { PagesRoutesModule } from './pages-routing.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';





@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        AccountSettingsComponent
    ],
    exports: [
        DashboardComponent,
        AccountSettingsComponent
    ],
    imports: [
        SharedModule,
        PagesRoutesModule
      ]
})

export class PagesModule { }
