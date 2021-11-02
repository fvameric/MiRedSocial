import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import module
import { CrudModule } from './crud-usuarios/crud.module';
import { PerfilUsuarioComponent } from './crud-usuarios/perfiles-usuario/perfil-usuario/perfil-usuario.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalComponentComponent } from './crud-usuarios/perfiles-usuario/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    //AppComponent
    PerfilUsuarioComponent
  ],
  entryComponents: [
    ModalComponentComponent
  ]
})
export class AppModule { }
