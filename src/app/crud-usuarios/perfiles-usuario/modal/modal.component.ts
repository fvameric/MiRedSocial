import { Component, OnInit, Input } from '@angular/core';

//imports
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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

  @Input() userSeleccionado: Usuario = {
    nombre: '', apellidos: '', edad: 0, foto: '', descripcion: '', correo: '', password: '', confirmarPassword: ''
  }

}
