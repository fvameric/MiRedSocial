import { Component, Input, OnInit } from '@angular/core';

//imports
import { Usuario } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() userSeleccionado: Usuario = {
    nombre: '', apellidos: '', edad: 0, foto: '', descripcion: '', correo: '', password: '', confirmarPassword: ''
  }
}
