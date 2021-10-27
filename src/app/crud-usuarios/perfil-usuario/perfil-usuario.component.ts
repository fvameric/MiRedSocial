import { Component, Input, OnInit } from '@angular/core';

//import usuario
import { Usuario } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  // array usuarios
  usuarios: Usuario[] = [
    { nombre: 'Goku', apellidos: '9000', edad: 23, foto: 'foto', descripcion: 'descr', correo: 'correo@gmail.com', password: '1234', confirmarPassword: '1234' },
    { nombre: 'Fran', apellidos: 'Cesc', edad: 28, foto: 'foto', descripcion: 'descr', correo: 'fran@gmail.com', password: 'fran', confirmarPassword: 'fran' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  agregarUsuario(data: Usuario) {
    this.usuarios.push(data);
  }
}
