import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'tracks',
    loadChildren: () => import('@modules/tracks/tracks.routes').then(m => m.routes)
  },
  {
    path: 'favorites',
    loadChildren: () => import('@modules/favorites/favorites.routes').then(m => m.routes)
  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.routes').then(m => m.routes)
  },
  {
    path: '**',
    redirectTo: '/tracks'
  }
];