import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilUsuarioComponent } from './crud-usuarios/perfil-usuario/perfil-usuario.component';
import { RegistroUsuarioComponent } from './crud-usuarios/registro-usuario/registro-usuario.component';
import { PanelAdminComponent } from './crud-usuarios/panel-admin/panel-admin.component';

//import module
import { CrudModule } from './crud-usuarios/crud.module';
import { DetalleComponent } from './crud-usuarios/detalle/detalle.component';
@NgModule({
  declarations: [
    AppComponent,
    PerfilUsuarioComponent,
    RegistroUsuarioComponent,
    PanelAdminComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule
  ],
  providers: [],
  bootstrap: [
    //AppComponent
    PerfilUsuarioComponent
  ]
})
export class AppModule { }
