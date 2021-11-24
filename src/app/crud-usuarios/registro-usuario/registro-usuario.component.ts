import { Component, Input, OnInit, Output } from '@angular/core';

//imports
import { Usuario } from 'src/app/interfaces/usuarios';
import { EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  profileForm: any;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  @Input() usuariosAgregar: Usuario[] = [];
  @Output() onNuevoUsuario: EventEmitter<Usuario> = new EventEmitter();

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      nombreUsuario: ['', Validators.required],
      apellidosUsuario: ['', Validators.required],
      edadUsuario: ['', Validators.required],
      fotoUsuario: ['', Validators.required],
      descripcionUsuario: ['', Validators.required],
      correoUsuario: ['', [Validators.required, Validators.email]],
      passwordUsuario: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPasswordUsuario: ['', Validators.required]
    }, {
      validator: this.MustMatch('passwordUsuario', 'confirmarPasswordUsuario')
    });
  }
  
  MustMatch(pass: string, confirmPass: string) {
    return (controls: AbstractControl) => {
      const control = controls.get(pass);
      const matchingControl = controls.get(confirmPass)

      if (matchingControl?.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control?.value !== matchingControl?.value) {
        matchingControl?.setErrors({ mustMatch: true });
      } else {
        matchingControl?.setErrors(null);
      }
    }
  }
  get f() { return this.profileForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.profileForm.valid) {
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
          Swal.fire('Se registró a ' + this.profileForm.get('firstName')!.value + '!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('No se registró a nadie', '', 'info')
        }
      });
    }
  }
}
