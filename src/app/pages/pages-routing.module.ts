import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



const PagesRoute: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
          {path: 'dashboard', component: DashboardComponent},
          {path: 'account-settings', component: AccountSettingsComponent},
          {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(PagesRoute)],
    exports: [RouterModule]
  })
  export class PagesRoutesModule { }
