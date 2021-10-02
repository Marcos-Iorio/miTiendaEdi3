import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProdService } from 'src/app/servicios/prod.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() productos: any[] = [];

  valorProd: string | undefined;

  constructor(public prodService : ProdService, public router: Router) {
  }

  borrarProducto(value: any){
    this.valorProd = value;
    const prodId = {prodId: this.valorProd}
    console.log(prodId);
    this.prodService.BorrarProducto(prodId).subscribe( data => {
      let datos = Object.values(data);
      if(datos[0] == true){
        window.location.reload();
      }else{
        console.log("false")
      }
    });
  }

  ngOnInit(): void {

  }



}
