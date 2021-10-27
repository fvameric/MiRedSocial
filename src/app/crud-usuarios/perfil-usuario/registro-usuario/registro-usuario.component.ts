import { Component, Input, OnInit, Output } from '@angular/core';

//imports
import { Usuario } from 'src/app/interfaces/usuarios';
import { NgForm } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';

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

  @Output() onNuevoUsuario: EventEmitter<Usuario> = new EventEmitter();
  
  nombreUsuario = "nombre";
  apellidosUsuario = "apellido";
  edadUsuario = 0;
  fotoUsuario = "foto";
  descripcionUsuario = "descripcion";
  correoUsuario = "nuevo@user.com";
  passwordUsuario = "pass";
  confirmarPasswordUsuario = "pass";

  submit() {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const usuarioNuevo: Usuario = {
          nombre: '',
          apellidos: '',
          edad: 0,
          foto: 'lol',
          descripcion: '',
          correo: '',
          password: '',
          confirmarPassword: ''
        };
    
        usuarioNuevo.nombre = this.nombreUsuario;
        usuarioNuevo.apellidos = this.apellidosUsuario;
        usuarioNuevo.edad = this.edadUsuario;
        usuarioNuevo.foto = this.fotoUsuario;
        usuarioNuevo.descripcion = this.descripcionUsuario;
        usuarioNuevo.correo = this.correoUsuario;
        usuarioNuevo.password = this.passwordUsuario;
        usuarioNuevo.confirmarPassword = this.confirmarPasswordUsuario;
    
        this.onNuevoUsuario.emit(usuarioNuevo);

        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
}
