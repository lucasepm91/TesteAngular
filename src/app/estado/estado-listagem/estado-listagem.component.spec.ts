import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoListagemComponent } from './estado-listagem.component';

describe('EstadoListagemComponent', () => {
  let component: EstadoListagemComponent;
  let fixture: ComponentFixture<EstadoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
