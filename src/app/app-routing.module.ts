import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { ListaContactosComponent } from './paginas/lista-contactos/lista-contactos.component';
import { ViewContactoComponent } from './paginas/view-contacto/view-contacto.component';

const routes: Routes = [
  {path:"paginas/contacto", component: ContactoComponent},
  {path:"paginas/contacto/:id", component: ViewContactoComponent},
  {path:"paginas/listado-contactos", component: ListaContactosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

