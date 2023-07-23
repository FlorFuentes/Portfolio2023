import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BannerComponent } from './componentes/banner/banner.component';

const routes: Routes = [
  { path: "", redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'banner', component: BannerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
