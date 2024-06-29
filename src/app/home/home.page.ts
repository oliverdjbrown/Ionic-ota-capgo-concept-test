import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';
import { FormComponent } from '../form/form.component';
import { UpdateAppService } from '../services/update-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    FormComponent,
    IonButton,
  ],
})
export class HomePage {
  constructor(
    private updateAppService: UpdateAppService,
    private router: Router
  ) {}

  async certificateFlow(flowName: string) {
    const availableUpdate =
      await this.updateAppService.validateIfNewVersionIsAvailable(flowName);

    if (availableUpdate) {
      return;
    }

    this.navToPage('/certificate-flow');
  }

  async creditCardFlow(flowName: string) {
    const availableUpdate =
      await this.updateAppService.validateIfNewVersionIsAvailable(flowName);

    if (availableUpdate) {
      return;
    }

    this.navToPage('/creditcard-flow');
  }

  navToPage(url: string) {
    this.router.navigate([url]);
  }
}
