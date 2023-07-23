import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

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
}
