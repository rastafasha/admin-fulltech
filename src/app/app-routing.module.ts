import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import {LoginComponent} from './auth/login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';


import { ManageContactComponent } from './mange/manage-contact/manage-contact.component';


import { UsersFormComponent } from './users-form/users-form.component';
import { ManageUsersComponent } from './mange/manage-users/manage-users.component';

// import { ManageRegistrosComponent } from './manage-registros/manage-registros.component';
// import { RegistrosFormComponent} from './registros-form/registros-form.component';
import { ArticuloFormComponent } from './forms/articulo-form/articulo-form.component';
import { ManageArticuloComponent } from './mange/manage-articulo/manage-articulo.component';
import { ManageDestacadoComponent } from './mange/manage-destacado/manage-destacado.component';
import { DestacadoFormComponent } from './forms/destacado-form/destacado-form.component';
import { ManageBanncuadradoComponent } from './mange/manage-banncuadrado/manage-banncuadrado.component';
import { FormsBancuadradoComponent } from './forms/forms-bancuadrado/forms-bancuadrado.component';
import { ManageBannhorizontalComponent } from './mange/manage-bannhorizontal/manage-bannhorizontal.component';
import { FormsBanhorizontalComponent } from './forms/forms-banhorizontal/forms-banhorizontal.component';
import { ManageBannemergenteComponent } from './mange/manage-bannemergente/manage-bannemergente.component';
import { FormsBanemergenteComponent } from './forms/forms-banemergente/forms-banemergente.component';


const routes: Routes = [
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },

  { path: 'articulo', component: ManageArticuloComponent },
  { path: 'articulo/create', component: ArticuloFormComponent },
  { path: 'articulo/edit/:id', component: ArticuloFormComponent },

  { path: 'destacado', component: ManageDestacadoComponent },
  { path: 'destacado/create', component: DestacadoFormComponent },
  { path: 'destacado/edit/:id', component: DestacadoFormComponent },

  // Contact
  { path: 'contact', component: ManageContactComponent },
  { path: 'users', component: ManageUsersComponent },
  { path: 'users/create', component: UsersFormComponent },
  { path: 'users/edit/:id', component: UsersFormComponent },
  
  { path: 'banner-cuadrado', component: ManageBanncuadradoComponent },
  { path: 'banner-cuadrado/create', component: FormsBancuadradoComponent },
  { path: 'banner-cuadrado/edit/:id', component: FormsBancuadradoComponent },

  { path: 'banner-horizontal', component: ManageBannhorizontalComponent },
  { path: 'banner-horizontal/create', component: FormsBanhorizontalComponent },
  { path: 'banner-horizontal/edit/:id', component: FormsBanhorizontalComponent },
  
  { path: 'banner-emergente', component: ManageBannemergenteComponent },
  { path: 'banner-emergente/create', component: FormsBanemergenteComponent },
  { path: 'banner-emergente/edit/:id', component: FormsBanemergenteComponent },
  //
  /*
  { path: 'subcriptores', component: ManageRegistrosComponent },
  { path: 'subcriptores/create', component: RegistrosFormComponent },
  { path: 'subcriptores/edit/:id', component: RegistrosFormComponent },*/

  { path: '**', redirectTo: '/admin', pathMatch: 'full' }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
