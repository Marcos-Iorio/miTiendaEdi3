import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  abrir: boolean = false;

  mobile: boolean = false;

  constructor(public authService: AuthService) { }
  
  ngOnInit(): void {

  }

  logOut(){
    this.authService.logOut();
  }

  abrirMenu(){
    this.abrir = true;
  }

  cerrarMenu(){
    this.abrir = false;
  }


 /*  mobileDevice(){
    if (window.screen.width <= 768){
      this.mobile == true;
    }
  } */
}
