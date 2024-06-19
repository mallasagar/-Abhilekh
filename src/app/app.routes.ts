import { Routes } from '@angular/router';
import { ErrorComponent } from './shared/Components/error/error.component';
import { LandingpageComponent } from './shared/Components/landingpage/landingpage.component';
import { AuthComponent } from './shared/Components/auth/auth.component';


export const routes: Routes = [
        {path:'',component:LandingpageComponent},
        {path: 'admin',loadChildren: () => import('./modules/admin.Modules/admin.module').then(m => m.AdminModule) },
        {path: 'users', loadChildren: () => import('./modules/user.Modules/user.module').then(m => m.UserModule ) },
        {path:'login',component:AuthComponent},
        {path:'home', pathMatch:'full', redirectTo: '/'},
        {path:'**', component:ErrorComponent}
];
