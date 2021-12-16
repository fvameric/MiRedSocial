import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

//imports
import { Usuario } from 'src/app/interfaces/usuarios';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {
  
  usuarios: Usuario[] = [];

  constructor(private userService: UsersService) {
    
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usuarios = this.userService.getUsers();
  }

  //@Input() usersPanel: Usuario[] = [];
  @Output() onUsuarioBorrado: EventEmitter<Usuario> = new EventEmitter();

  itemSelected(user: Usuario) {

    Swal.fire({
      title: 'Realmente quieres eliminar a ' + user.nombre + '?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sí',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(user);
        Swal.fire('Se eliminó a ' + user.nombre + '!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se eliminó a nadie', '', 'info')
      }
    })
  }
}
