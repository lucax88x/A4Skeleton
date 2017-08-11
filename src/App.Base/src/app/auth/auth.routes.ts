import { Route } from '@angular/router';

import { LoginComponent } from './containers/login/login.component';

export const AuthRoutes: Route[] = [
    {
        path: 'login',
        component: LoginComponent
    }
];