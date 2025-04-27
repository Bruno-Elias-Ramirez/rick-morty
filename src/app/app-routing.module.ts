import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'character-list',
    pathMatch: 'full'
  },
  {
    path: 'episodes',
    loadChildren: () => import('@pages/episodes/dh-episodes.module').then(m => m.DhEpisodesModule)
  },
  {
    path: 'home',
    loadChildren: () => import('@pages/home/dh-home.module').then(m => m.DhHomeModule)
  },
  {
    path: 'character-list',
    loadChildren: () => import('@characters/characters-list/dh-characters-list.module').then(m => m.DhCharactersListModule)
  },
  {
    path: 'characters-details/:id',
    loadChildren: () => import('@characters/characters-details/dh-characters-details.module').then(m => m.DhCharactersDetailsModule)
  },
  {
    path: 'about',
    loadChildren: () => import('@pages/about/dh-about.module').then(m => m.DhAboutModule)
  },
  {
    path: '**',
    loadChildren: () => import('@pages/not-found/dh-not-found.module').then(m => m.DhNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
