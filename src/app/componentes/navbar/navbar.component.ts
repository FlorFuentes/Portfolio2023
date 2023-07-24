import { Component, HostListener } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor ( private dataport:DatosPortfolioService) { }

  toInicio(){
    document.getElementById("inicio")?.scrollIntoView({behavior:"smooth"});
   }
   toSobremi(){
    document.getElementById("sobreMi")?.scrollIntoView({behavior:"smooth"});
   }
   toHabilidadestecnicas(){
    document.getElementById("habilidadestecnicas")?.scrollIntoView({behavior:"smooth"});
   }
   toProyectos(){
    document.getElementById("proyectos")?.scrollIntoView({behavior:"smooth"});
   }

   //cambio color navbar
   // To change the background color of the navbar on click
  isNavbarBlack: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const aboutSectionOffset = document.getElementById('apartirdeaca')?.offsetTop || 0;
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isNavbarBlack = currentScrollPosition >= aboutSectionOffset;
  }

  toggleNavbarColor() {
    while(!this.isNavbarBlack) {
      this.isNavbarBlack = !this.isNavbarBlack;
    }
  }

}
