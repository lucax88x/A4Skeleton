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
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { AppComponent } from './app.component';
import { AppMetaReducers } from './app.meta-reducers';
import { AppRoutes } from './app.routes';
import { NotFoundComponent } from './containers/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,

    AuthModule,
    AdminModule,

    RouterModule.forRoot(
      AppRoutes,
      { enableTracing: !environment.production }
    ),

    StoreModule.forRoot([], { metaReducers: AppMetaReducers }),
    EffectsModule.forRoot([]),

    StoreRouterConnectingModule,

    !environment.production ? StoreDevtoolsModule.instrument() : [],

    ToastrModule.forRoot({
      timeOut: 10000,
      extendedTimeOut: 500,
      preventDuplicates: true,
      progressBar: true
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
