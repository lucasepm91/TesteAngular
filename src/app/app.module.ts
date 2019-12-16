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
import { ListagemComponent } from './pessoa/listagem/listagem.component';
import { DeletarPessoaComponent } from './pessoa/deletar-pessoa/deletar-pessoa.component';
import { DetalharPessoaComponent } from './pessoa/detalhar-pessoa/detalhar-pessoa.component';
import { EstadoListagemComponent } from './estado/estado-listagem/estado-listagem.component';
import { EstadoCadastroComponent } from './estado/estado-cadastro/estado-cadastro.component';
import { EstadoDetalheComponent } from './estado/estado-detalhe/estado-detalhe.component';
import { EstadoDeletarComponent } from './estado/estado-deletar/estado-deletar.component';
import { PaisListagemComponent } from './pais/pais-listagem/pais-listagem.component';
import { PaisCadastroComponent } from './pais/pais-cadastro/pais-cadastro.component';
import { PaisDetalheComponent } from './pais/pais-detalhe/pais-detalhe.component';
import { PaisDeletarComponent } from './pais/pais-deletar/pais-deletar.component'
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PessoaComponent,
    EstadoComponent,
    PaisComponent,
    HomeComponent,
    CadastroComponent,
    ListagemComponent,
    DeletarPessoaComponent,
    DetalharPessoaComponent,
    EstadoListagemComponent,
    EstadoCadastroComponent,
    EstadoDetalheComponent,
    EstadoDeletarComponent,
    PaisListagemComponent,
    PaisCadastroComponent,
    PaisDetalheComponent,
    PaisDeletarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules})    
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
