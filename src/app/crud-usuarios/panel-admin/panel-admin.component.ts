import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

//imports
import { Usuario } from 'src/app/interfaces/usuarios';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-panel-admin',
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {
  
  usersPanel: Usuario[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params);
    });
    /*
    this.usersPanel.forEach(element => {
      console.log(element);
    });
    */
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
        this.onUsuarioBorrado.emit(user);
        Swal.fire('Se eliminó a ' + user.nombre + '!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se eliminó a nadie', '', 'info')
      }
    })
  }
}
