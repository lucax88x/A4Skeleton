import { Route } from '@angular/router';

import { NotFoundComponent } from './containers/not-found/not-found.component';
import { UserDetailComponent } from './containers/user-detail/user-detail.component';
import { UserListComponent } from './containers/user-list/user-list.component';


export const AppRoutes: Route[] = [
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: 'user/:id',
        component: UserDetailComponent
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];