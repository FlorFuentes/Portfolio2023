import { Component } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  sMi:any;

  constructor (private datosSobre:DatosPortfolioService){}

  ngOnInit(): void{
    this.datosSobre.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.sMi=data
    });
  }

}
