import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    return this.http.get<any>("https://edi-iorio-back.herokuapp.com/productos/")
  }

  BorrarProducto(prodId: any){
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.delete("https://edi-iorio-back.herokuapp.com/productos/borrar", {'body': prodId})
  }

  EditarProducto(producto: any){
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    return this.http.put("http://localhost:8080/productos/editar", producto)
  }

}
