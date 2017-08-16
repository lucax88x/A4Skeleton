import { Route } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { NotFoundComponent } from './containers/not-found/not-found.component';

// import { AuthGuard } from './auth/services/auth-guard.service';
export const AppRoutes: Route[] = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        loadChildren: './admin/admin.module#AdminModule',
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];