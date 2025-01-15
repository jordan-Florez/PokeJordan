import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

// Aquí agregamos HttpClientModule directamente en appConfig
bootstrapApplication(AppComponent, {
  ...appConfig,  // Preservamos las configuraciones existentes
  providers: [
    ...appConfig.providers,  // Si ya tienes proveedores configurados en appConfig
    importProvidersFrom(HttpClientModule)  // Importamos HttpClientModule
  ]
})
  .catch((err) => console.error(err));
