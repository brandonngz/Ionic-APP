import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userLogin:string;
  userLoginPassword:string;
  userLoginMessage:string;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  validateUser()  {
    if(this.userLogin === "Brandon"){

      if(this.userLoginPassword === "123")  {

        this.userLogin = "";
        this.userLoginPassword = "";
        this.userLoginMessage = "";

        window.localStorage.setItem('logIn','In');
        this.router.navigate(['']);
        
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
