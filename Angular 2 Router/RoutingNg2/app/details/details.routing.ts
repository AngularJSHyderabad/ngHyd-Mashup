import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';
import { AuthorComponent } from './author.component';
import { IntroductionComponent } from './introduction.component';
import { ResolveGuard } from '../guards/resolveGuard';
import { CanActivateGuard } from '../guards/canActivateGuard';
import { CanDeactivateChildGuard } from '../guards/canDeactivateChildGuard';
import { CanActivateChildGuard } from '../guards/canActivateChildGuard';
const detailsRoutes: Routes = [
    {
        path: 'details/:id',
        component: DetailsComponent,
        children: [
            { path: '', component: AuthorComponent },
            { path: 'author', component: AuthorComponent},
            { path: 'introduction', component: IntroductionComponent, resolve: { introText: ResolveGuard } }
        ]
    }
];
export const detailsRouting: ModuleWithProviders = RouterModule.forChild(detailsRoutes);

// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { DetailsComponent } from './details.component';
// import { AuthorComponent } from './author.component';
// import { IntroductionComponent } from './introduction.component';
// import { IntroductionResolve } from './introduction.resolve.service'
// import { LoginGuard } from '../guards/login.guard';
// import { SaveGuard } from '../guards/details.save.guard';

// @NgModule({
//     imports: [
//         RouterModule.forChild([
//             {
//                 path: 'details/:id',
//                 component: DetailsComponent,
//                 canActivate: [LoginGuard],
//                 canDeactivate: [SaveGuard],
//                 canActivateChild: ['CanActivateChildGuard'],
//                 children: [
//                     { path: '', component: AuthorComponent },
//                     { path: 'author', component: AuthorComponent },
//                     { path: 'introduction', component: IntroductionComponent, resolve: { introText: IntroductionResolve } }
//                 ]
//             }
//         ])
//     ],
//     exports: [
//         RouterModule
//     ]
// })
// export class DetailsRoutingModule { }

