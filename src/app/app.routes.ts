import { Routes } from '@angular/router';
import { Promise } from './features/promise/promise';

export const routes: Routes = [
    {path:'promise',loadComponent:() =>import('./features/promise/promise').then(m=> m.Promise)},
    // {path:'',loadComponent:() =>import('./features/pr').then(m=> m.Promise) {
    ];
