import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    loadComponent: () => import('./_features/coffee-choice/coffee-choice.component').then(c => c.CoffeeChoiceComponent)
  },
  {
    path: "coffee-mix",
    loadComponent: () => import('./_features/coffee-mix/coffee-mix.component').then(c => c.CoffeeMixComponent)
  },
  {
    path: "devices",
    loadComponent: () => import ('./_features/preparer-device/preparer-device.component').then(c => c.PreparerDeviceComponent)
  },
  {
    path: "name-weight-choice",
    loadComponent: () => import('./_features/name-weight-choice/name-weight-choice.component').then(c => c.NameWeightChoiceComponent)
  }
];
