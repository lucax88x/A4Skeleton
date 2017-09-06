import { Route } from '@angular/router';

import { LoggedInComponent } from './containers/logged-in/logged-in.component';

export const AuthRoutes: Route[] = [
    {
        path: 'logged-in',
        component: LoggedInComponent
    }
];