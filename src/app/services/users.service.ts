import { Injectable } from '@angular/core';

//imports
// interface
import { Usuario } from '../interfaces/usuarios';

// array del archivo lista-usuarios.ts
import { arrUsuarios } from '../services/lista-usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Usuario[] = arrUsuarios;

  constructor() { }

  // función para obtener los usuarios
  getUsers(): Usuario[] {
    return this.users;
  }

  // para agregar un usuario
  addUser(user: Usuario) {
    this.users.push(user);
  }

  // o eliminarlo
  deleteUser(user: Usuario) {
    this.users.forEach((usuario, index)=>{
      if(usuario == user) this.users.splice(index, 1);
  });
  }
}
