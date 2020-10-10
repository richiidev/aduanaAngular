import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  toggleIcon: boolean = true;
  contentclass = "maxsizecontent";
  toggleIconList: boolean = true;
  public sidebarOpen: boolean = false;
  public sidebarHover: boolean = false;
  usuarios: boolean;
  pagos: boolean;
  facturas: boolean;
  home: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getHome() {
    this.usuarios = false;
    this.pagos = false;
    this.facturas = false;
    this.home = true;
  }
  getUsuarios() {
    this.usuarios = true;
    this.pagos = false;
    this.facturas = false;
    this.home = false;
  }
  getFacturas() {
    this.usuarios = false;
    this.pagos = false;
    this.facturas = true;
    this.home = false;
  }
  getPagos() {
    this.usuarios = false;
    this.pagos = true;
    this.facturas = false;
    this.home = false;
  }
 
 


}
