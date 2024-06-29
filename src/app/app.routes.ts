import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'creditcard-flow',
    loadComponent: () =>
      import('./creditcard-flow/creditcard-flow.page').then(
        (m) => m.CreditCardFlowPage
      ),
  },
  {
    path: 'certificate-flow',
    loadComponent: () =>
      import('./certification-flow/certification-flow.page').then(
        (m) => m.CertificationFlowPage
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
