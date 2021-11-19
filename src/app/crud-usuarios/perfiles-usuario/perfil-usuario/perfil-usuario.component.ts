import { Component, EventEmitter, Input, OnInit } from '@angular/core';

//import usuario
import { Usuario } from 'src/app/interfaces/usuarios';
import { UsersService } from 'src/app/services/users.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  // array usuarios
  usuarios: Usuario[] = [];

  onNuevoUsuario(e: Usuario) {
    console.log(e);
  }

  constructor(public modalService: NgbModal, private userService: UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usuarios = this.userService.getUsers();
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

  panel: boolean = false;
  panelAdmin() {
    this.panel = true;
  }

  eliminarUsuario(data: Usuario) {
    console.log("se borrará: " + data.nombre);

    this.usuarios.forEach((element,index) => {
      if (element.correo == data.correo) {
        this.usuarios.splice(index,1);
      }
    });
  }

  abrirModal(user: Usuario) {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.userSeleccionado = user;
  }

  /* routerlink with params */
  testrouter() {
    let user: Usuario = {
      nombre: '',
      apellidos: '',
      edad: 0,
      foto: '',
      descripcion: '',
      correo: '',
      password: '',
      confirmarPassword: ''
    }
    user = this.usuarios[0];
    return ['/home/paneladmin:users', user];
  }
}
