import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from '../core/core.module';
import { AuthReducers } from './auth.reducers';
import { AuthRoutes } from './auth.routes';
import { LoginComponent } from './containers/login/login.component';
import { LoginEffects } from './containers/login/login.effects';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        CoreModule,

        RouterModule.forChild(
            AuthRoutes
        ),

        StoreModule.forFeature('auth', AuthReducers),
        EffectsModule.forFeature([LoginEffects]),
    ],
    providers: [AuthService]
})
export class AuthModule { }