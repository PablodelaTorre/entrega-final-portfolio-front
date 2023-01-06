import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExitoComponent } from './components/exito/exito.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GuardGuard } from './servicios/guard.guard';

const routes: Routes = [
  {path:'portfolio',component:PortfolioComponent,canActivate:[GuardGuard]},
  {path:'exito',component:ExitoComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'',redirectTo:'iniciar-sesion',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
