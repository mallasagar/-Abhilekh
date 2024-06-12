import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';


const user_routes:Routes=[
    {path:'', component:UserComponent, children:[
        {path:'', loadComponent:()=>import('./components/user-dashboard/user-dashboard.component').then(m=>m.UserDashboardComponent)},
        { path: '',   redirectTo: '', pathMatch:  'full' },
    ]}
]


@NgModule({
    declarations:[],
    imports:[
        CommonModule, RouterModule.forChild(user_routes)
    ]
})
export class UserModule{}