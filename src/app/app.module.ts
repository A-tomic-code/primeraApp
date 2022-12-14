import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { FormularioNuevoLibroComponent } from './component/formulario-nuevo-libro/formulario-nuevo-libro.component';
import { CardLibroComponent } from './component/card-libro/card-libro.component';
import { ReferenciaPipe } from './pipes/referencia.pipe';
import { EditarLibroComponent } from './pages/editar-libro/editar-libro.component';
import { NuevoLibroComponent } from './pages/nuevo-libro/nuevo-libro.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormularioRegistroComponent,
    RegistroComponent,
    PerfilComponent,
    LibrosComponent,
    FormularioNuevoLibroComponent,
    CardLibroComponent,
    ReferenciaPipe,
    EditarLibroComponent,
    NuevoLibroComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
