import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore, StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { BaselineEffects } from './app/+state/baseline.effects';
import { baselinesFeature } from './app/+state/baseline.reducer';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule,
      StoreModule.forRoot({}),
      StoreModule.forFeature(baselinesFeature)
    ),
    provideAnimations(),
    provideStore(),
    provideStoreDevtools(),
    provideEffects([BaselineEffects]),
  ],
}).catch((err) => console.error(err));
