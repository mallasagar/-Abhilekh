import { NgModule } from '@angular/core';
import { AdminComponent } from "./admin.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';


const admin_routes:Routes=[
    {path:'', component:AdminComponent, children:[
        {path:'', loadComponent:()=>import('./components/admin-dashboard/admin-dashboard.component').then(m=>m.AdminDashboardComponent)},
        { path: '',   redirectTo: '', pathMatch:  'full' },
    ]}
]


@NgModule({
    declarations:[],
    imports:[
        CommonModule, RouterModule.forChild(admin_routes)
    ]
})
export class AdminModule{}