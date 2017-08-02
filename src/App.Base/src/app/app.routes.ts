import { NotFoundComponent } from './not-found/not-found.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

export default  [
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