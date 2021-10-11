import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userLogin:string;
  userLoginPassword:string;
  userLoginMessage:string;

  constructor() { }

  ngOnInit() {
  }
  
  validateUser()  {
    if(this.userLogin === "Brandon"){

      if(this.userLoginPassword === "123")  {

        this.userLogin = "";
        this.userLoginPassword = "";
        this.userLoginMessage = "You are in";
        
      } else  {
        this.userLoginPassword = "";
        this.userLoginMessage = "Contraseña incorrecta.";

      }
    } else {
      this.userLogin = "";
      this.userLoginMessage = "Usuario Desconocido";
    }

  }

}
