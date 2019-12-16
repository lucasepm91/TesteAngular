import { CommonModule } from "@angular/common";
import { PaisCadastroComponent } from './pais-cadastro.component';
import { NgModule } from '@angular/core'

@NgModule({
    declarations:[
      [PaisCadastroComponent]
    ],
    imports:[
        CommonModule
    ],
    exports: []
  })

  export class PaisCadastroModule{}