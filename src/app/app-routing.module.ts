import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilUsuarioComponent } from './crud-usuarios/perfiles-usuario/perfil-usuario/perfil-usuario.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [{
  path: "",
  component: PrincipalComponent
},
{
  path: "primerlink",
  component: PerfilUsuarioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
