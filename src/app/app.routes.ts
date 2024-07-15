import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: "", loadComponent: () => import('./coffee-choice/coffee-choice.component').then(c => c.CoffeeChoiceComponent)},
  {path: "coffee-mix", loadComponent: () => import('./coffee-mix/coffee-mix.component').then(c => c.CoffeeMixComponent)}
];
