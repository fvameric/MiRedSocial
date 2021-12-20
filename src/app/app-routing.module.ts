import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelAdminComponent } from './crud-usuarios/panel-admin/panel-admin.component';
import { PerfilUsuarioComponent } from './crud-usuarios/perfiles-usuario/perfil-usuario/perfil-usuario.component';
import { RegistroUsuarioComponent } from './crud-usuarios/registro-usuario/registro-usuario.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},
{
  path: "home",
  component: PerfilUsuarioComponent
},
{
  path: "home/registro",
  component: RegistroUsuarioComponent
},
{
  path: "home/paneladmin",
  component: PanelAdminComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
