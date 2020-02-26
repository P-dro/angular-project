import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroGameComponent } from '../app/cadastro-game/cadastro-game.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastroGame', component: CadastroGameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
