import { Component, OnInit, Input } from '@angular/core';

//imports
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/interfaces/usuarios';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  constructor(public activeModal: NgbActiveModal) { }
  
  ngOnInit(): void {
  }

  // input del usuario pulsado en algún listado
  // del componente perfil-usuario
  @Input() userSeleccionado: Usuario = {
    nombre: '', apellidos: '', edad: 0, foto: '', descripcion: '', correo: '', password: ''
  }

}
