import { Injectable } from '@angular/core';

//imports
import { Usuario } from '../interfaces/usuarios';
import { arrUsuarios } from '../services/lista-usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Usuario[] = arrUsuarios;

  constructor() { }

  getUsers(): Usuario[] {
    return this.users;
  }

  addUser(user: Usuario) {
    this.users.push(user);
  }

  deleteUser(user: Usuario) {
    this.users.forEach((usuario, index)=>{
      if(usuario == user) this.users.splice(index, 1);
  });
  }
}
