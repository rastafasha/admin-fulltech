import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './http-interceptors/index';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';


// Import Angular plugin.
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { UsersFormComponent } from './users-form/users-form.component';
import { ManageUsersComponent } from './mange/manage-users/manage-users.component';

// import { RegistrosFormComponent } from './registros-form/registros-form.component';
// import { ManageRegistrosComponent } from './manage-registros/manage-registros.component';

import { ManageContactComponent } from './mange/manage-contact/manage-contact.component';


import { ManageArticuloComponent } from './mange/manage-articulo/manage-articulo.component';
import { ManageDestacadoComponent } from './mange/manage-destacado/manage-destacado.component';
import { ArticuloFormComponent } from './forms/articulo-form/articulo-form.component';
import { DestacadoFormComponent } from './forms/destacado-form/destacado-form.component';
import { FormsBancuadradoComponent } from './forms/forms-bancuadrado/forms-bancuadrado.component';
import { ManageBanncuadradoComponent } from './mange/manage-banncuadrado/manage-banncuadrado.component';



//pipes
import {KeysPipe} from './pipes/keys.pipe';

// paginacion
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsBanhorizontalComponent } from './forms/forms-banhorizontal/forms-banhorizontal.component';
import { FormsBanverticalComponent } from './forms/forms-banvertical/forms-banvertical.component';
import { ManageBannhorizontalComponent } from './mange/manage-bannhorizontal/manage-bannhorizontal.component';
import { ManageBannverticalComponent } from './mange/manage-bannvertical/manage-bannvertical.component';
import { ManageRegistrosComponent } from './mange/manage-registros/manage-registros.component';
import { RegistrosFormComponent } from './registros-form/registros-form.component';
import { ManageBannemergenteComponent } from './mange/manage-bannemergente/manage-bannemergente.component';
import { FormsBanemergenteComponent } from './forms/forms-banemergente/forms-banemergente.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DashboardComponent,
    ManageContactComponent,
    UsersFormComponent,
    ManageUsersComponent,
    // RegistrosFormComponent,
    // ManageRegistrosComponent,
    ManageArticuloComponent,
    ManageDestacadoComponent,
    ArticuloFormComponent,
    DestacadoFormComponent,
    KeysPipe,
    FormsBancuadradoComponent,
    ManageBanncuadradoComponent,
    FormsBanhorizontalComponent,
    FormsBanverticalComponent,
    ManageBannhorizontalComponent,
    ManageBannverticalComponent,
    ManageRegistrosComponent,
    RegistrosFormComponent,
    ManageBannemergenteComponent,
    FormsBanemergenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    NgxPaginationModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
