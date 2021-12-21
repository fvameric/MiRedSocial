import { Component, EventEmitter, Input, OnInit } from '@angular/core';

//import usuario
import { Usuario } from 'src/app/interfaces/usuarios';
import { UsersService } from 'src/app/services/users.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  // array usuarios
  usuarios: Usuario[] = [];

  //panel: boolean = false;
  registrar: boolean = false;
  
  userSeleccionado: Usuario = {
    nombre: '', apellidos: '', edad: 0, foto: '', descripcion: '', correo: '', password: ''
  }

  constructor(public modalService: NgbModal, private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usuarios = this.userService.getUsers();
  }
  
  itemSelected(user: Usuario){
    this.userSeleccionado = user;
  }

  agregarUsuario(data: Usuario) {
    this.userService.addUser(data);
  }

  registro() {
    if (this.registrar == true) {
      this.registrar = false;
    } else {
      this.registrar = true;
    }
  }

  // abrirá el modal y guardo el usuario seleccionado
  // para mostrarlo en el componente lista-detalle y utilizar el INPUT
  abrirModal(user: Usuario) {
    this.userSeleccionado = user;
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.userSeleccionado = user;
  }
}
