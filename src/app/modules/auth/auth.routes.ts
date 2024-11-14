import { Routes } from '@angular/router';

export const authRoutes: Routes = [{
    path: 'login',
    //component: LoginPageComponent
},{
    path: '**',
    redirectTo: '/auth/login'
}];
 