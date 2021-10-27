import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//imports
import { FormsModule } from '@angular/forms';

//main
import { PerfilUsuarioComponent } from './perfiles-usuario/perfil-usuario/perfil-usuario.component';

import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { DetalleComponent } from './perfiles-usuario/detalle/detalle.component';

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
