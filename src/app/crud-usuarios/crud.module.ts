import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//imports
import { FormsModule } from '@angular/forms';

//main
import { PerfilUsuarioComponent } from './perfiles-usuario/perfil-usuario/perfil-usuario.component';
import { RouterModule } from '@angular/router';
import { RegistroUsuarioComponent } from './registro-usuario/registro-usuario.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './perfiles-usuario/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaDetalleComponent } from './lista-detalle/lista-detalle.component';
@NgModule({
  declarations: [
    PerfilUsuarioComponent,
    RegistroUsuarioComponent,
    PanelAdminComponent,
    ModalComponent,
    ListaDetalleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    PerfilUsuarioComponent
  ]
})
export class CrudModule { }
