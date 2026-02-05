import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router'; // MUSI BYĆ ZAIMPORTOWANE STĄD
import { provideHttpClient } from '@angular/common/http'; // A to stąd
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), // Router musi być dostarczony tutaj!
    provideHttpClient()
  ]
};
