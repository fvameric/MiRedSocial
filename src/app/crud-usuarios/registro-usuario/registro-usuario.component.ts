import { Component, Input, OnInit, Output } from '@angular/core';

//imports
import { Usuario } from 'src/app/interfaces/usuarios';
import { EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';

import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  profileForm = new FormGroup({
    nombreUsuario: new FormControl(''),
    apellidosUsuario: new FormControl(''),
    edadUsuario: new FormControl(''),
    fotoUsuario: new FormControl(''),
    descripcionUsuario: new FormControl(''),
    correoUsuario: new FormControl(''),
    passwordUsuario: new FormControl(''),
    confirmarPasswordUsuario: new FormControl('')
  });
  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  @Input() usuariosAgregar: Usuario[] = [];
  
  @Output() onNuevoUsuario: EventEmitter<Usuario> = new EventEmitter();
  
  /*
  nombreUsuario = "nombre";
  apellidosUsuario = "apellido";
  edadUsuario = 0;
  fotoUsuario = "foto";
  descripcionUsuario = "descripcion";
  correoUsuario = "nuevo@user.com";
  passwordUsuario = "pass";
  confirmarPasswordUsuario = "pass";
  */

  onSubmit() {
    Swal.fire({
      title: 'Realmente quieres registrar a ' + this.profileForm.get('nombreUsuario')!.value 
       + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Confirmar registro',
      denyButtonText: `No guardar`,
    }).then((result) => {
      if (result.isConfirmed) {
        const usuarioNuevo: Usuario = {
          nombre: this.profileForm.get('nombreUsuario')!.value,
          apellidos: this.profileForm.get('apellidosUsuario')!.value,
          edad: this.profileForm.get('edadUsuario')!.value,
          foto: this.profileForm.get('fotoUsuario')!.value,
          descripcion: this.profileForm.get('descripcionUsuario')!.value,
          correo: this.profileForm.get('correoUsuario')!.value,
          password: this.profileForm.get('passwordUsuario')!.value,
          confirmarPassword: this.profileForm.get('confirmarPasswordUsuario')!.value
        }
  
        /*
        usuarioNuevo.nombre = this.nombreUsuario;
        usuarioNuevo.apellidos = this.apellidosUsuario;
        usuarioNuevo.edad = this.edadUsuario;
        usuarioNuevo.foto = this.fotoUsuario;
        usuarioNuevo.descripcion = this.descripcionUsuario;
        usuarioNuevo.correo = this.correoUsuario;
        usuarioNuevo.password = this.passwordUsuario;
        usuarioNuevo.confirmarPassword = this.confirmarPasswordUsuario;
        */
    
        //this.onNuevoUsuario.emit(usuarioNuevo);
        //this.userService.addUser(usuarioNuevo);

        this.router.navigate(['/home/listado']);

        Swal.fire('Se registró a ' + this.profileForm.get('nombreUsuario')!.value + '!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se registró a nadie', '', 'info')
      }
    })
  }
}
