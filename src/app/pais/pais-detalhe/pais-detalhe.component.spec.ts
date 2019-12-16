import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisDetalheComponent } from './pais-detalhe.component';

describe('PaisDetalheComponent', () => {
  let component: PaisDetalheComponent;
  let fixture: ComponentFixture<PaisDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
