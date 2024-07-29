import { Routes } from '@angular/router';
// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      loadRemoteModule('remote', './routes').then((m) => m.routes),
  },
];
