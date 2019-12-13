import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharPessoaComponent } from './detalhar-pessoa.component';

describe('DetalharPessoaComponent', () => {
  let component: DetalharPessoaComponent;
  let fixture: ComponentFixture<DetalharPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
