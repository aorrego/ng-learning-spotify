import { enableProdMode } from '@angular/core';

import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';

import {
  HTTP_INTERCEPTORS,
  withInterceptorsFromDi,
  provideHttpClient,
} from '@angular/common/http';

import { appRoutes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),

    provideHttpClient(withInterceptorsFromDi()),
  ],
}).catch((err) => console.error(err));