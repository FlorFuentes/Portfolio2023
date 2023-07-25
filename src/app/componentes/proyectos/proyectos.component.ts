import { Component } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  proyec:any;
  proyecLista:any;
  constructor( private datosProyec:DatosPortfolioService){}

  ngOnInit(): void{
    this.datosProyec.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.proyec=data
      this.proyecLista=data.proyectos.proyecto
    });
  }
}
