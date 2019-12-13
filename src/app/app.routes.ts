import {Routes} from '@angular/router'
import { EstadoComponent } from './estado/estado.component'
import { PaisComponent } from './pais/pais.component'
import { PessoaComponent } from './pessoa/pessoa.component'
import { HeaderComponent } from './header/header.component'

export const ROUTES: Routes = [
    {path: '',component: HeaderComponent},
    {path: 'pessoas',component: PessoaComponent},
    {path: 'paises',component: PaisComponent},
    {path: 'estados',component: EstadoComponent}
]