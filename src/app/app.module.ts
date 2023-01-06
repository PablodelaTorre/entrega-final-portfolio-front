import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FooterComponent } from './components/footer/footer.component';
import { TecnologiasBackComponent } from './components/tecnologias-back/tecnologias-back.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ExitoComponent } from './components/exito/exito.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CurriculumComponent,
    ProyectosComponent,
    TecnologiasComponent,
    FormularioComponent,
    FooterComponent,
    TecnologiasBackComponent,
    ExitoComponent,
    PortfolioComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
