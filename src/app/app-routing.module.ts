import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'agendas',
    loadChildren: () => import('./agendas/agendas.module').then( m => m.AgendasPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
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
  {
    path: 'editar-agenda',
    loadChildren: () => import('./editar-agenda/editar-agenda.module').then( m => m.EditarAgendaPageModule)
  },
  {
    path: 'editar-eventos',
    loadChildren: () => import('./editar-eventos/editar-eventos.module').then( m => m.EditarEventosPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },



 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
