import { not } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './componentes/app.component';
import { EditarprodComponent } from './componentes/editarprod/editarprod.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { TiendaComponent } from './componentes/tienda/tienda.component';

const routes: Routes = [
  {path: "", component: InicioComponent, pathMatch: "full"},
  {path: "home", redirectTo: ""},
  {path: "login", component: LoginComponent, pathMatch:"full"},
  {path: "registro", redirectTo: '/login'},
  {path: "tienda", component: TiendaComponent},
  {path: "tienda/editar/:id", component: EditarprodComponent},
  {path: "404", component: NotFoundComponent, pathMatch:"full"},
  {path: "**", redirectTo: '/404'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
