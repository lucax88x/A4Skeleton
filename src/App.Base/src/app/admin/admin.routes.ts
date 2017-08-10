import { Route } from '@angular/router';

import { UserListComponent } from './containers/user-list/user-list.component';

export const AdminRoutes: Route[] = [
    {
        path: 'users',
        component: UserListComponent
    }
];