import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelAdminComponent } from './crud-usuarios/panel-admin/panel-admin.component';
import { PerfilUsuarioComponent } from './crud-usuarios/perfiles-usuario/perfil-usuario/perfil-usuario.component';
import { RegistroUsuarioComponent } from './crud-usuarios/registro-usuario/registro-usuario.component';
import { PrincipalComponent } from './principal/principal.component';
import { Usuario } from 'src/app/interfaces/usuarios';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: "home",
  component: PrincipalComponent
},
{
  path: "home/listado",
  component: PerfilUsuarioComponent
},
{
  path: "home/registro",
  component: RegistroUsuarioComponent
},
{
  path: "home/paneladmin:users",
  component: PanelAdminComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
