import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoDeletarComponent } from './estado-deletar.component';

describe('EstadoDeletarComponent', () => {
  let component: EstadoDeletarComponent;
  let fixture: ComponentFixture<EstadoDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
