import { Injectable } from '@angular/core';
import { CapacitorUpdater } from '@capgo/capacitor-updater';
import { AlertController } from '@ionic/angular/standalone';
import * as SemVer from 'semver';

@Injectable({
  providedIn: 'root',
})
export class UpdateAppService {
  constructor(private alertController: AlertController) {}

  async fetchVersions() {
    try {
      const url =
        'https://raw.githubusercontent.com/oliverdjbrown/capgo-concept-test/main/updates.json';

      const response = await fetch(url);

      const data = await response.json();

      return data;
    } catch (err) {
      console.error(err);
    }
  }

  async validateIfNewVersionIsAvailable(flowVersion?: string): Promise<boolean> {
    const currentAppVersion = '0.0.37';

    const serverVersions: any = await this.fetchVersions();

    const versionToCompare = flowVersion
      ? serverVersions[flowVersion]
      : serverVersions.version;

    const newVersionAvailable = SemVer.gt(versionToCompare, currentAppVersion);

    if (newVersionAvailable) {
      this.showNewUpdateAlert(versionToCompare);
    }

    return newVersionAvailable;
  }

  async showNewUpdateAlert(version?: string) {

    const alert = await this.alertController.create({
      header: 'Update Available',
      message: `New version ${version} is available. Do you want to update?`,
      buttons: [
        {
          text: 'Update',
          role: 'confirm',
          handler: async () => {
            const availableUpdate = await this.fetchVersions();
            const update = await this.downloadUpdate(availableUpdate);
            this.setUpdate(update);
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }

  async downloadUpdate(availableUpdate: any) {
    const update = await CapacitorUpdater.download(availableUpdate);

    return update;
  }

  async setUpdate(update: any) {
    try {
      await CapacitorUpdater.set(update);
    } catch (err) {
      console.error(err);
    }
  }
}
