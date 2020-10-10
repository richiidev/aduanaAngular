import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturasComponent } from './components/facturas/facturas.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'facturas', component: FacturasComponent
  },
  {
    path: 'pagos', component: PagosComponent
  },
  {
    path: 'registrar', component: RegistrarComponent
  },
  // Inicializar pagina de inicio
  {
    path: '**', pathMatch: 'full', redirectTo: 'login'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
