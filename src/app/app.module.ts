import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import module
import { CrudModule } from './crud-usuarios/crud.module';
import { PerfilUsuarioComponent } from './crud-usuarios/perfiles-usuario/perfil-usuario/perfil-usuario.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './crud-usuarios/perfiles-usuario/modal/modal.component';
import { PrincipalComponent } from './principal/principal.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CrudModule,
    NgbModule,
    FormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
    //PerfilUsuarioComponent
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class AppModule { }
