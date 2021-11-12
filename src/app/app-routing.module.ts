import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilUsuarioComponent } from './crud-usuarios/perfiles-usuario/perfil-usuario/perfil-usuario.component';
import { RegistroUsuarioComponent } from './crud-usuarios/registro-usuario/registro-usuario.component';
import { PrincipalComponent } from './principal/principal.component';

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
  path: "home/primerlink",
  component: PerfilUsuarioComponent
},
{
  path: "home/registro",
  component: RegistroUsuarioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
