import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisDeletarComponent } from './pais-deletar.component';

describe('PaisDeletarComponent', () => {
  let component: PaisDeletarComponent;
  let fixture: ComponentFixture<PaisDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
