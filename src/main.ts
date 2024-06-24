import { enableProdMode } from '@angular/core';
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

CapacitorUpdater.notifyAppReady();

let data: any ;
let appInfo: any = {};

App.getInfo().then((info) => {
  appInfo = info;
});

App.addListener('appStateChange', async (state) => {
  alert(JSON.stringify(state));
  const update = await fetchUpdates();

  if (state.isActive) {
    data = await CapacitorUpdater.download(update);
  }

  if (!state.isActive && appInfo.version !== update.version) {
    try {
      await CapacitorUpdater.set(data);
    } catch (err) {
      console.error(err);
    }
  }
});

async function fetchUpdates() {
  const response = await fetch("https://raw.githubusercontent.com/oliverdjbrown/capgo-test/main/updates.json");

  const data = await response.json();

  return data;
}

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
