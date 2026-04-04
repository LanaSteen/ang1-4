import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },

  {
    path : 'home',
    loadComponent : () => import('./home/home').then(resp => resp.Home)
  },
  {
    path : 'restaurant',
    loadComponent : () => import('./restaurant/restaurant').then(resp => resp.Restaurant)
  },
  {
    path : 'todo',
    loadComponent : () => import('./todo/todo').then(resp => resp.Todo)
  },
  {

    path : "**",
    loadComponent : () => import('./error/error').then(resp => resp.Error)
    


  }

];

// eager routing 

// {

//     path : 'home',
//     component : Home
//   },
// lazy loading 