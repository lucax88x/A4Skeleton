import { Route } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';

export const AppRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const Routes = {
    Home: "/",
    Auth: {
        Login: "/login"
    },
    Admin: {
        Users: "/admin/users"
    }
}