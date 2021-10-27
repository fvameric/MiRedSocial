import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//imports
import { FormsModule } from '@angular/forms';

//main
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';

import { RegistroUsuarioComponent } from './perfil-usuario/registro-usuario/registro-usuario.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    PerfilUsuarioComponent,
    RegistroUsuarioComponent,
    DetalleComponent,
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
