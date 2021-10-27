import { Component, EventEmitter, Input, OnInit } from '@angular/core';

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
    { nombre: 'Juan', apellidos: 'Lopez', edad: 23, foto: 'foto', descripcion: 'descr', correo: 'correo@gmail.com', password: '1234', confirmarPassword: '1234' },
    { nombre: 'Fran', apellidos: 'Cesc', edad: 28, foto: 'foto', descripcion: 'descr', correo: 'fran@gmail.com', password: 'fran', confirmarPassword: 'fran' },
    { nombre: 'Sonia', apellidos: 'Molina', edad: 28, foto: 'foto', descripcion: 'descr', correo: 'sonia@gmail.com', password: 'sonia', confirmarPassword: 'sonia' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  detalle: boolean = false;
  userSeleccionado : Usuario = {
    nombre: '', apellidos: '', edad: 0, foto: '', descripcion: '', correo: '', password: '', confirmarPassword: ''
  }

  itemSelected(user: Usuario){
    this.detalle = true;
    this.userSeleccionado = user;
  }

  registrar: boolean = false;
  
  registro() {
    this.registrar = true;
  }

  agregarUsuario(data: Usuario) {
    this.usuarios.push(data);
  }
}
