import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.css']
})
export class ListaDetalleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() userListado: Usuario = {
    nombre: '', apellidos: '', edad: 0, foto: '', descripcion: '', correo: '', password: ''
  }
}
