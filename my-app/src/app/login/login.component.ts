import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formularioLogin:FormGroup;
  singIn:boolean;
  disabled:boolean = false;
  constructor(    
    private formBuilder: FormBuilder,       
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      checkAdmin:['',[Validators.required]],
      checkUsers:['',[Validators.required]]
    });
   
  }
  ingresar():void { 
    if((this.formularioLogin.get('user')?.value != false && this.formularioLogin.get('password')?.value != false )){     
      this.singIn = true;
      this.dialog.open( DialogComponent, {
        data: {
          message: 'Bienvenido',
          user: this.formularioLogin.get('user')?.value,
          password: this.formularioLogin.get('password')?.value, 
        }
      });      
    }else{
      this.error("Debe ingresar usuario y contraseña");
    }
  }

  error(mensaje:string){
    alert(mensaje);
  }
}
