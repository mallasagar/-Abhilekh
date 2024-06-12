import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ErrorComponent } from './shared/Components/error/error.component';


export const routes: Routes = [
        {path:'',component:AppComponent},
        {path: 'admin',loadChildren: () => import('./modules/admin.Modules/admin.module').then(m => m.AdminModule) },
        {path: 'users', loadChildren: () => import('./modules/user.Modules/user.module').then(m => m.UserModule ) },
        // {path:'login',component:AuthComponent},
        // {path:'register',component:RegisterComponent},
        {path:'home', pathMatch:'full', redirectTo: '/'},
        {path:'**', component:ErrorComponent}
];
