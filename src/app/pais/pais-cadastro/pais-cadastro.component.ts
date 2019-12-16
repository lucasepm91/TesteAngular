import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pais-cadastro',
  templateUrl: './pais-cadastro.component.html',
  styleUrls: ['./pais-cadastro.component.css']
})

export class PaisCadastroComponent implements OnInit {

  formulario: FormGroup;

  onSubmit(form){
    console.log(form);
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() { 
    this.formulario = this.formBuilder.group({
      nome: [null],
      continente: [null],
      bandeira: [null]
    });
  }

}
