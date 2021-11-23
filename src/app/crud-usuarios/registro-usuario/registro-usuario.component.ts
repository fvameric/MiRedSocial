import { Component, Input, OnInit, Output } from '@angular/core';

//imports
import { Usuario } from 'src/app/interfaces/usuarios';
import { EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from 'src/app/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  profileForm = new FormGroup({
    nombreUsuario: new FormControl('', Validators.required),
    apellidosUsuario: new FormControl('', Validators.required),
    edadUsuario: new FormControl('', Validators.required),
    fotoUsuario: new FormControl('', Validators.required),
    descripcionUsuario: new FormControl('', Validators.required),
    correoUsuario: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    passwordUsuario: new FormControl('', Validators.required),
    confirmarPasswordUsuario: new FormControl('', Validators.required)
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @Input() usuariosAgregar: Usuario[] = [];
  @Output() onNuevoUsuario: EventEmitter<Usuario> = new EventEmitter();

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
    
        this.onNuevoUsuario.emit(usuarioNuevo);
        this.router.navigate(['/home/listado']);

        Swal.fire('Se registró a ' + this.profileForm.get('nombreUsuario')!.value + '!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se registró a nadie', '', 'info')
      }
    })
  }
}
