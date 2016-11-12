import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CanActivateGuard } from './guards/canActivateGuard';
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' }
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

/////////////////////////////////
// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { DetailsComponent } from './details/details.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { LoginComponent } from './login/login.component';
// import { LoginGuard } from './guards/login.guard';

// @NgModule({
//     imports: [
//         RouterModule.forRoot([
//             {
//                 path: '',
//                 redirectTo: 'login',
//                 pathMatch: 'full'
//             },
//             {
//                 path: 'login',
//                 component: LoginComponent
//             },
//             {
//                 path: 'dashboard',
//                 canActivate: [LoginGuard],
//                 component: DashboardComponent
//             },
//             {
//                 path: 'details/:id',
//                 canActivate: [LoginGuard],
//                 component: DetailsComponent
//             },
//             { path: 'about', loadChildren: 'app/about/about.module#AboutModule' }
//         ])
//     ],
//     exports: [
//         RouterModule
//     ]
// })
// export class AppRoutingModule { }

