import { Component } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  ban: any;
  
  constructor (private  datosBan:DatosPortfolioService){}

  ngOnInit(): void{
    this.datosBan.obtenerDatos().subscribe(data => {
      console.log(data)
      this.ban = data
    });
  }
}
