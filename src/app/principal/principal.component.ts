import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuarios';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  loginForm: any;
  submitted = false;

  // array usuarios
  usuarios: Usuario[] = [];

  noEncontrado = false;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private router: Router) { }
  
  ngOnInit(): void {
    this.usuarios = this.userService.getUsers();

    this.loginForm = this.formBuilder.group({
      userNickname: ['', Validators.required],
      userPass: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.usuarios.forEach(usuario => {
      if (usuario.nombre == this.loginForm.get('userNickname')!.value.trim() && usuario.password == this.loginForm.get('userPass')!.value.trim()) {
        this.router.navigateByUrl('/home/listado');
      } else {
        this.noEncontrado = true;
      }
    });
  }

  validarLogin() {

  }
}
