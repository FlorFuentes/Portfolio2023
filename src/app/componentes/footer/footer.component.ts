import { Component } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  toContacto(){document.getElementById("inicio")?.scrollIntoView({behavior:"smooth"});}

  foo:any;
  constructor( private datosFooter:DatosPortfolioService){}

  ngOnInit(): void{
    this.datosFooter.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.foo=data
    });
  }

}
