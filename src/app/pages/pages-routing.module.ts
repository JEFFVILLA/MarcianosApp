import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';



const PagesRoute: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
          {path: 'dashboard', component: DashboardComponent},
          {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(PagesRoute)],
    exports: [RouterModule]
  })
  export class PagesRoutesModule { }
