import { Component, Input, OnInit, Output } from '@angular/core';

//imports
// interface
import { Usuario } from 'src/app/interfaces/usuarios';

// para el output
import { EventEmitter } from '@angular/core';

// import de sweetalert2
import Swal from 'sweetalert2';

// imports para el formulario
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  
  // variables para formulario
  profileForm: any;
  submitted = false;

  // variables para la imagen
  imgBase64Path: string = '';
  isImageSaved: boolean = false;
  cardImageBase64: string = 'assets/default.png';

  constructor(private formBuilder: FormBuilder) {}

  // input y outputs
  @Input() usuariosAgregar: Usuario[] = [];
  @Output() onNuevoUsuario: EventEmitter<Usuario> = new EventEmitter();

  ngOnInit(): void {

    // Inicializo el formulario con sus validaciones
    this.profileForm = this.formBuilder.group({
      nombreUsuario: ['', Validators.required],
      apellidosUsuario: ['', Validators.required],
      edadUsuario: ['', Validators.required],
      fotoUsuario: [''],
      descripcionUsuario: ['', [Validators.required, Validators.minLength(4)]],
      correoUsuario: ['', [Validators.required, Validators.email]],
      passwordUsuario: ['', [Validators.required, Validators.minLength(6)]],
      confirmarPasswordUsuario: ['', Validators.required]
    }, {
      validator: this.MustMatch('passwordUsuario', 'confirmarPasswordUsuario')
    });
  }

  // función para controlar que los campos pass y confirmar pass sean iguales
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

  // con esto no hará falta poner en el html "profileForm" cada vez que se utilice
  get f() { return this.profileForm.controls; }

  // función para la subida de imágenes
  fileChangeEvent(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          this.imgBase64Path = e.target.result;
          this.cardImageBase64 = this.imgBase64Path;
          this.isImageSaved = true;
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  // al darle a registrar, se mostrará el sweetAlert2
  onSubmit() {
    this.submitted = true;

    if (this.profileForm.valid) {
      Swal.fire({
        title: 'Realmente quieres registrar a ' + this.profileForm.get('nombreUsuario')!.value
          + '?',
        showDenyButton: true,
        confirmButtonText: 'Confirmar registro',
        denyButtonText: `No guardar`,
      }).then((result) => {
        if (result.isConfirmed) {
          const usuarioNuevo: Usuario = {
            nombre: this.profileForm.get('nombreUsuario')!.value,
            apellidos: this.profileForm.get('apellidosUsuario')!.value,
            edad: this.profileForm.get('edadUsuario')!.value,
            foto: this.cardImageBase64,
            descripcion: this.profileForm.get('descripcionUsuario')!.value,
            correo: this.profileForm.get('correoUsuario')!.value,
            password: this.profileForm.get('passwordUsuario')!.value
          }

          this.onNuevoUsuario.emit(usuarioNuevo);
          Swal.fire('Se registró a ' + this.profileForm.get('nombreUsuario')!.value + '!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('No se registró a nadie', '', 'info')
        }
      });
    }
  }
}
