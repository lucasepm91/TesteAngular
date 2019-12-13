import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { EstadoComponent } from './estado/estado.component';
import { PaisComponent } from './pais/pais.component';
import { RouterModule, PreloadAllModules  } from '@angular/router';
import {ROUTES} from './app.routes';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './pessoa/cadastro/cadastro.component';
import { ListagemComponent } from './pessoa/listagem/listagem.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PessoaComponent,
    EstadoComponent,
    PaisComponent,
    HomeComponent,
    CadastroComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
