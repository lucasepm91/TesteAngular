import {Routes} from '@angular/router'
import { EstadoComponent } from './estado/estado.component'
import { PaisComponent } from './pais/pais.component'
import { PessoaComponent } from './pessoa/pessoa.component'
import { ListagemComponent } from './pessoa/listagem/listagem.component'
import {CadastroComponent} from '../app/pessoa/cadastro/cadastro.component'
import { DeletarPessoaComponent } from './pessoa/deletar-pessoa/deletar-pessoa.component'
import { DetalharPessoaComponent } from './pessoa/detalhar-pessoa/detalhar-pessoa.component'

export const ROUTES: Routes = [    
    {path: 'paises',component: PaisComponent},
    {path: 'estados',component: EstadoComponent},
    {path: 'pessoas',component: PessoaComponent},
    {path: 'listarPessoas', component: ListagemComponent},
    {path: 'cadastroPessoa', component: CadastroComponent},
    {path: 'deletarPessoa', component: DeletarPessoaComponent},
    {path: 'detalhePessoa', component: DetalharPessoaComponent}
]