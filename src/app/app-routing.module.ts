import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { SkillComponent } from './componentes/skill/skill.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';

const routes: Routes = [
  { path: "", redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'skills', component: SkillComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'footer', component: FooterComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
