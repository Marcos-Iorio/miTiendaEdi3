import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class ProdService {

  constructor(private http: HttpClient) { }

  productos(prod: any, url: string): Observable<any>{
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
      return this.http.post(url , prod)
  }

  obtenerCategorias(){
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.get<any>("http://localhost:8080/productos/")
  }

  BorrarProducto(prodId: any){
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.delete("http://localhost:8080/productos/borrar", {'body': prodId})
  }

  EditarProducto(producto: any){
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.put("http://localhost:8080/productos/editar", producto)
  }


}
