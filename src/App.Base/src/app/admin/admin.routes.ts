import { Route } from '@angular/router';

import { AuthGuard } from '../auth/guards/auth.guard';
import { AdminComponent } from './containers/admin/admin.component';
import { UserListComponent } from './containers/user-list/user-list.component';

export const AdminRoutes: Route[] = [
    {                
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: 'users',
                component: UserListComponent,
                canActivate: [AuthGuard]
            }
        ]
    }
];