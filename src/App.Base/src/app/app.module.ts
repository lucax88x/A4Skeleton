import 'rxjs/Rx';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppMetaReducers } from './app.meta-reducers';
import { AppReducers } from './app.reducers';
import { AppRoutes } from './app.routes';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { UserDetailComponent } from './containers/user-detail/user-detail.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UserListEffects } from './containers/user-list/user-list.effects';
import { LockerDirective } from './directives/locker.directive';
import { ValuesPipe } from './pipes/values.pipe';
import { LockerService } from './services/locker.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserListComponent,
    NotFoundComponent,
    ValuesPipe,
    LockerDirective
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,

    RouterModule.forRoot(
      AppRoutes,
      // { enableTracing: !environment.production }
    ),

    StoreModule.forRoot(AppReducers, { metaReducers: AppMetaReducers }),

    StoreRouterConnectingModule,

    !environment.production ? StoreDevtoolsModule.instrument() : [],

    EffectsModule.forRoot([UserListEffects]),

    ToastrModule.forRoot({
      timeOut: 10000,
      extendedTimeOut: 500,
      preventDuplicates: true,
      progressBar: true
    }),

  ],
  providers: [LockerService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
