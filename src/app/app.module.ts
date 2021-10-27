import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import module
import { CrudModule } from './crud-usuarios/crud.module';
import { PerfilUsuarioComponent } from './crud-usuarios/perfil-usuario/perfil-usuario.component';
@NgModule({
  declarations: [
    AppComponent
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
