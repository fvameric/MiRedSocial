import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//imports
import { FormsModule } from '@angular/forms';

//main
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';

@NgModule({
  declarations: [
    PerfilUsuarioComponent,
    RegistroUsuarioComponent,
    PanelAdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PerfilUsuarioComponent
  ]
})
export class CrudModule { }