import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre: string | undefined;
  mail: string | undefined;
  password: string| undefined;

  respuestaRe: string | undefined;
  respuestaLogin: string | undefined;
  
  
  constructor( public userService: UsuariosService, public router: Router, public authService : AuthService) {}

    login(){
      const user = {nombre: this.nombre, password: this.password};
      
      console.log(user);
      this.userService.login(user).subscribe( data => {
        console.log(data);
        if(data['success'] == false){
          this.router.navigateByUrl('/login')
          this.respuestaLogin = data['message'];
        }else{
          this.respuestaLogin = data['message'];
          this.authService.setLogin(data['jwt'])
          this.router.navigateByUrl('/home');
        }
        
      });
    }

    getLogin(){
      if(this.authService.getToken() === true){
        this.router.navigateByUrl('/home');
      }else{

      }
    }

    registro(){
      const user = {nombre: this.nombre, password: this.password, mail: this.mail};
      console.log(user)
      this.userService.registro(user).subscribe( data => {
        if(data['success'] == true){
          this.respuestaRe = data['message'];
        }else{
          this.respuestaRe = data['message'];
        }
      });
    }


  /* Efectos login */
    movimientoLogin(){
      const signUpButton = <HTMLButtonElement>document.getElementById('signUp');
      const signInButton = <HTMLButtonElement>document.getElementById('signIn');
      const container = <HTMLDivElement>document.getElementById('container');

      signUpButton.addEventListener('click', () => {
          container.classList.add("right-panel-active");
      });

      signInButton.addEventListener('click', () => {
          container.classList.remove("right-panel-active");
      });
  }
        /* $(document).ready(function(){
            $('#libroIcon').popover('show');
        }); */
    //popOver
      /* popover(){
          var libro = document.getElementById("libroIcon");
          libro.addEventListener('click',() =>{
              $('#libroIcon').popover('hide');
          });
      } */

  ngOnInit(): void {
    this.movimientoLogin();
    /* this.getLogin(); */
  }

}
