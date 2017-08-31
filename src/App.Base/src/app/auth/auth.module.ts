import { AuthEffects } from './auth.effects';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from '../core/core.module';
import { AuthReducers } from './auth.reducers';
import { AuthRoutes } from './auth.routes';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './containers/login/login.component';
import { LoginEffects } from './containers/login/login.effects';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        LoginComponent,
        LoginFormComponent
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        CoreModule,

        RouterModule.forChild(
            AuthRoutes
        ),

        StoreModule.forFeature('auth', AuthReducers),
        EffectsModule.forFeature([AuthEffects, LoginEffects]),
    ],    
    providers: [AuthService, AuthGuard]
})
export class AuthModule { }