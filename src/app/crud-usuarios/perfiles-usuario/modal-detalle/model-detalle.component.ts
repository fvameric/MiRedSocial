import { Component, OnInit } from '@angular/core';

//import
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalService } from 'src/app/Services/modal.service';
@Component({
  selector: 'app-model-detalle',
  templateUrl: './model-detalle.component.html',
  styleUrls: ['./model-detalle.component.css']
})
export class ModelDetalleComponent implements OnInit {

//Form Validables 
registerForm!: FormGroup;
submitted = false;
constructor( private formBuilder: FormBuilder){}
//Add user form actions
get f() { return this.registerForm.controls; }
onSubmit() {
  
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  //True if all the fields are filled
  if(this.submitted)
  {
    alert("Great!!");
  }
 
}
  ngOnInit() {
    //Add User form validations
    this.registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    });
  }

}
