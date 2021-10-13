import { Component } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  logIn:string;

  constructor(private router:Router) {

  
      this.logIn = window.localStorage.getItem('logIn');

      if(this.logIn == null || this.logIn == "")  {

        this.router.navigate(['login']);
      } else  {

        this.router.navigate(['']);
      }
      
    
  }

}
