import { enableProdMode, inject } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { CapacitorUpdater } from '@capgo/capacitor-updater';
import { App } from '@capacitor/app';
import { UpdateAppService } from './app/services/update-app.service';

CapacitorUpdater.notifyAppReady();

let update: any

App.addListener('appStateChange', async (state) => {
  /*
  const updateService = inject(UpdateAppService);

  const availableUpdate = await updateService.fetchVersions();

  if (state.isActive) {
    update = updateService.downloadUpdate(availableUpdate);
  }

  if (!state.isActive) {
    updateService.setUpdate(update);
  }
    */
});


if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
