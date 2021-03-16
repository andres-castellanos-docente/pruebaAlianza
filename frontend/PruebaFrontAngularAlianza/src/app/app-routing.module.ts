import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppprincComponent} from './appBase/princ/appprinc.component';
import {BlankComponent} from './formas/blank';
import {ClientsComponent} from './formas/clients';
import {HomeGuard, LoginGuard} from './guards';
import {LoginComponent} from './formas/login';

export const routes: Routes = [
  {

    path: '', component: AppprincComponent,
    children: [
      {path: 'clients', component: ClientsComponent, canActivate: [LoginGuard]},
      {path: '', component: BlankComponent, canActivate: [LoginGuard, HomeGuard]}]

  },
  {path: 'login', component: LoginComponent, canActivate: []},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
