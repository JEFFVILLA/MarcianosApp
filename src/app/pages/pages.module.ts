import { NgModule } from '@angular/core';


import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Rutas
import { PagesRoutesModule } from './pages-routing.module';





@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent
    ],
    exports: [
        DashboardComponent,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PagesRoutesModule
      ]
})

export class PagesModule { }
