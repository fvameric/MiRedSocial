import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//imports
import { FormsModule } from '@angular/forms';

//main
import { PerfilUsuarioComponent } from './perfiles-usuario/perfil-usuario/perfil-usuario.component';
import { RouterModule } from '@angular/router';
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
    FormsModule,
    RouterModule
  ],
  exports: [
    PerfilUsuarioComponent
  ]
})
export class CrudModule { }
