import { Component } from '@angular/core';
import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  skill:any;

  constructor (private datosSkill:DatosPortfolioService){}

  ngOnInit(): void{
    this.datosSkill.obtenerDatos().subscribe(data =>{
      console.log(data)
      this.skill=data
    });
  }
  
}
