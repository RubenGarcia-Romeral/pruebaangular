import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  variable: string = ""

  num1
  num2

  usuarios= [
    {nombre: "Manolo", apellido: "Lopez"},
    {nombre: "David", apellido: "Rebato"},
    {nombre: "Francisco", apellido: "Ortega"}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
