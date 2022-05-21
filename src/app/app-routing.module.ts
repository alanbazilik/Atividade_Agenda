import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'agendas',
    loadChildren: () => import('./agendas/agendas.module').then( m => m.AgendasPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'lista-agenda',
    loadChildren: () => import('./lista-agenda/lista-agenda.module').then( m => m.ListaAgendaPageModule)
  },
  {
    path: 'avaliar',
    loadChildren: () => import('./avaliar/avaliar.module').then( m => m.AvaliarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
