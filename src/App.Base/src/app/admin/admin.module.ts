import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from '../core/core.module';
import { AdminReducers } from './admin.reducers';
import { AdminRoutes } from './admin.routes';
import { AdminComponent } from './containers/admin/admin.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UserListEffects } from './containers/user-list/user-list.effects';
import { UserService } from './services/user.service';

@NgModule({
    declarations: [
        AdminComponent,
        UserListComponent
    ],
    imports: [
        CommonModule,
        CoreModule,

        RouterModule.forChild(
            AdminRoutes
        ),

        StoreModule.forFeature('admin', AdminReducers),
        EffectsModule.forFeature([UserListEffects]),
    ],
    providers: [UserService]
})
export class AdminModule { }