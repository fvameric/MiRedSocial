import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilUsuarioComponent } from './crud-usuarios/perfiles-usuario/perfil-usuario/perfil-usuario.component';
import { PrincipalComponent } from './principal/principal.component';
import { SesionComponent } from './sesion/sesion.component';

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
  path: "sesion",
  component: SesionComponent
},
{
  path: "home/primerlink",
  component: PerfilUsuarioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
