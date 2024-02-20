import { Routes } from '@angular/router';
import { CustomRangesComponent } from './custom-ranges/custom-ranges.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'simple',
    pathMatch: 'full'
  },

  {
    path: 'custom-ranges',
    component: CustomRangesComponent
  }
];
