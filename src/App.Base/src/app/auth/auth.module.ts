import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from '../core/core.module';
import { AuthEffects } from './auth.effects';
import { AuthReducers } from './auth.reducers';
import { AuthRoutes } from './auth.routes';
import { LoggedInComponent } from './containers/logged-in/logged-in.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [LoggedInComponent],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        CoreModule,

        RouterModule.forChild(
            AuthRoutes
        ),

        StoreModule.forFeature('auth', AuthReducers),
        EffectsModule.forFeature([AuthEffects]),
    ],
    providers: [AuthService, AuthGuard]
})
export class AuthModule {

}
