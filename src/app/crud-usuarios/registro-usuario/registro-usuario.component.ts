import { Component, Input, OnInit, Output } from '@angular/core';

//imports
import { Usuario } from 'src/app/interfaces/usuarios';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() usuariosAgregar: Usuario[] = [];

  @Output() onNuevousuario: EventEmitter<Usuario> = new EventEmitter();

  nombreUsuario = "";
  apellidosUsuario = "";
  edadUsuario = "";
  fotoUsuario = "";
  descripcionUsuario = "";
  correoUsuario = "";
  passwordUsuario = "";
  confirmarPasswordUsuario = "";

  usuarioNuevo: Usuario = {
    nombre: , apellidos: '', edad: 0, foto: '', descripcion: '', correo: '', password: '', confirmarPassword: ''
  };
  
  submit() {


    this.onNuevousuario.emit(usuarioNuevo);
  }
}
